const User=require("../model/user")

exports.postUser = async(req, res) => {
 

    try {
        const { name, email, age } = req.body;

        if (!name)
        {
            return res.status(422).json("enter the valid name")
        }
         if (!email) {
           return res.status(422).json("enter the valid email");
         }
         if (!age) {
           return res.status(422).json("enter the valid age");
         }
        let userinfo = new User({ name, email, age });
        const result=await User.create(userinfo)
        res.status(201).json(result);
    } catch (err)
    {
        res.status(401).json(err.message);
    }

}
exports.getUsers = async (req, res) => {
    try {
        
        const userlist = await User.find({});
        res.status(200).json(userlist);

    } catch (err) {
        res.status(400).json(err.message);
    }
    
}

exports.getUser = async (req, res) => {
    
    try {

        let userQuery = { _id: req.params.id }
        //here _id is form json and id form parameter :id

        var user = await User.findOne(userQuery);
        if (user === null) {
          throw new Error();
        }
        res.status(201).json(user);
        
    }catch(err)
    {
        res.status(404).json("user not found")
    }
}

exports.deleteUserById = async (req, res) => {
  try {
    let userQuery = { _id: req.params.id };
    //here _id is form json and id form parameter :id

      var user = await User.findOneAndDelete(userQuery);
      if (user === null)
      {
          throw new Error();
      }
    res.status(201).json(user);
  } catch (err) {
    res.status(404).json("user not found");
  }
};


exports.updateUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (!name) {
      return res.status(422).json("enter the valid name");
    }
    if (!email) {
      return res.status(422).json("enter the valid email");
    }
    if (!age) {
      return res.status(422).json("enter the valid age");
    }
    
    const result = await User.findOneAndUpdate({_id: req.params.id},{$set: {name, email, age } } )
    res.status(201).json(result);
  } catch (err) {
    res.status(401).json(err.message);
  }
};