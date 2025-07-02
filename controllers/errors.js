
const onNotFoundPage = (req, res)=>{
    res.status(404).render('404', {path:'/404' ,title: "Page Not Found"})
}

module.exports = {
    onNotFoundPage
}