exports.create = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is admin-create section"})
}

exports.read = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is admin-read section"})
}

exports.delete = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is admin-delete section"})
}

exports.update = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is admin-update section"})
}