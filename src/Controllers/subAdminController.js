exports.create = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is subAdmin-create section"})
}

exports.read = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is subAdmin-read section"})
}

exports.delete = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is subAdmin-delete section"})
}

exports.update = async(req, res)=>{
    res.status(200).json({status: "success", data: "this is subAdmin-update section"})
}