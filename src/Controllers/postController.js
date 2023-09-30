exports.create = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is post-create section"})
}

exports.read = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is post-read section"})
}

exports.delete = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is post-delete section"})
}

exports.update = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is post-update section"})
}