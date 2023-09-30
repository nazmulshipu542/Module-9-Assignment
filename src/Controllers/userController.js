exports.create = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is user-create section"})
}

exports.read = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is user-read section"})
}

exports.delete = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is user-delete section"})
}

exports.update = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is user-update section"})
}