const Bloglist = ({ blogs, title, author, id, handleDelete }) => {
  // let blogs = props.blogs  // when the data is passed it is accessed using props
  //or we can destructure it as shown above

  //since mapping blogs can be done and used anywhere we can make that as a component
  // here we made that as a component and passed the data here to it
  // in order to pass data to a component we need to use props
  // and here the blogs={blogs} is the props that's being passed
  // we can access the data as props in the component
  return (
    <div className="blog-preview">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by - {blog.author}</p>
        </div>
      ))}
    </div>
  ); // we can write handleDelete function here itself or we can define it in home and send the function as props which is what done here
  // since we should not directly delete the data we should define function at homepage and then modify a dubplicate array
};

export default Bloglist;
