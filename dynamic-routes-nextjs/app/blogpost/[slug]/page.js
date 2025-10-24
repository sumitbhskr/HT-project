export default  function Page({ params }) {

let languages = ["python", "javascript", "java", "c++",
    "c#"]

    if(languages.includes(params.slug)){
        return<div>My post: {params.slug}</div>
    }
    else{
        return<div>Post not found</div>
    }
    return <div>My Post: {params.slug}</div>
}