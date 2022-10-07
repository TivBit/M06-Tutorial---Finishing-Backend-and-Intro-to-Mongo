//morgan and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog ({
        title: 'new blog 2',
        snippet: 'about my new blog', 
        body: 'more about my new blog'
    });
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/all-blogs', (req, res) => {
        Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/single-blog', (req, res) => {
    Blog.findById() //can't access the blog object with id that goes in the findById parameter.
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});