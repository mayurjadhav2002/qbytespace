const express = require('express');
const Blog = require('../models/blogModel');
const Search = require('../models/Search');
const create_blog = async (req, res) => {
    try {
        const thumbnail = req.file.filename;
        const blog = new Blog({
            title: req.body.title,
            description: req.body.description,
            thumbnail: thumbnail,
            content: req.body.content,
            created_by: req.body.user_name,
            written_by: req.body.written_by,
            blog: req.body.blog_type,
            tags: req.body.tags,
        });
        const blog_data = await blog.save();
        if (blog_data) {
            res.status(200).send({ success: true, msg: "Blog Published", data: blog_data });
        };

    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });
    }
}

const get_all_blogs = async (req, res) => {
    
    try {
        const blogs = await Blog.find({}).sort({ "created_on": 'ascending' });
        if (blogs) {
            res.send(blogs);

        } else {
            res.status(500).send({ success: false, msg: "No blog found" });

        }
    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });
    }
};


const get_blogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ blog: req.body.blog_type });
        if (blogs) {
            res.send(blogs);

        } else {
            res.status(500).send({ success: false, msg: "No blog found" });

        }
    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });

    }
};



const search_blogs = async (req, res) => {
    try {
        const sort_data = req.body.sort_data;
        var search = req.body.search;
        const blogs = await Blog.find({
            $or:
                [{ "title": { $regex: ".*" + search + ".*", $options: 'i' } },
                { "content": { $regex: ".*" + search + ".*", $options: 'i' } },
                { "tags": { $regex: ".*" + search + ".*", $options: 'i' } },

                ]
        }).sort({ "created_on": sort_data }); //"content":{$regex: ".*"+search+".*", $options: 'i'}
        if (blogs) {
            await res.status(200).send({ total: blogs.length, blogs });
            try{
                new Search({
                    search_query: search
                })
            }catch{
                console.log("failed to insert search query")
            }
            
        } else {
            res.status(200).send({ success: true, msg: "No Blog Found" })
        }

    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });

    }
}

const Views = async (req, res) => {
    try {
        const blog_id = req.body.id;
        const update = await Blog.findByIdAndUpdate({ _id: blog_id }, { $inc: { views: 1 } }, function (err, response) {
            if (err) {
                callback(err);
            } else {
                callback(response);
            }
        });

        if (update) {
            res.status(200).send({ success: true, msg: "Views Updated" });

        } else {
            res.status(200).send({ success: false, msg: "Error Updating Views" })

        }


    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });

    }
}


const likes = async (req, res) => {
    try {
        const blog_id = req.body.id;
        const update = await Blog.findByIdAndUpdate({ _id: blog_id }, { $inc: { likes: 1 } }, function (err, response) {
            if (err) {
                callback(err);
            } else {
                callback(response);
            }
        })

        if (update) {
            res.status(200).send({ success: true, msg: "Likes Updated" });

        } else {
            res.status(200).send({ success: false, msg: "Error Updating Likes" })

        }


    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });

    }
}

const blog_by_id = async (req, res) => {
    try {
        const blog_id = req.query.id;
        const blog = await Blog.findOne({ _id: blog_id });

        if (blog) {
            res.status(200).send({ success: true, blog: blog });

        } else {
            res.status(200).send({ success: false, msg: "Error" })

        }


    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again", error: error.message });

    }
}

const update = async (req, res) => {
    try {
        const user_id = req.body.user_id;
        const blog_id = req.body.blog_id;
        const thumbnail = req.file.filename;

        const blog = await Blog.findOne({ _id: blog_id });
    
        if (user_id == blog.written_by) {
            const Blog = await Blog.findByIdAndUpdate({ _id: blog_id }, 
                {$set:{
                    
                 
                   title: req.body.title,
                    description: req.body.description,
                    thumbnail: thumbnail,
                    content: req.body.content,
                    blog: req.body.blog_type,
                    tags: req.body.tags
                                }},{new:true});
            if (Blog) {
                res.status(200).send({ success: true, msg: "blog updated", blog:Blog});
            } else {
                res.status(500).send({ success: false, msg: "Not found! May be already deleted" });
            }
        } else {
            res.status(500).send({ success: false, msg: "You Cannot update this post" });
        }
    } catch (error) {

    }
}

const data = async (req, res) => {
    try {
        const blog_id = req.body.blog_id;
        const blog = await Blog.findOne({ _id: blog_id });
        console.log(blog.written_by)
        if (blog.written_by == "64a5c1a6a376424a1f864844") {
            console.log("match")
        } else {
            console.log("Not matched")
        }
    } catch (error) {

    }
}


const delete_blog = async (req, res) => {
    try {
        const user_id = req.body.user_id;
        const blog_id = req.body.blog_id;
        const blog = await Blog.findOne({ _id: blog_id });
    
        if (user_id == blog.written_by) {
            const delBlog = await Blog.findByIdAndRemove({ _id: blog_id });
            if (delBlog) {
                res.status(200).send({ success: true, msg: "blog deleted" });
            } else {
                res.status(500).send({ success: false, msg: "Not found! May be already deleted" });
            }
        } else {
            res.status(500).send({ success: false, msg: "You Cannot delete this post" });
        }


    } catch (error) {
        res.status(500).send({ success: false, msg: "Some errored occured please try again" });

    }
}



const pagination = async(req, res) =>{
    try {
        var page = req.body.page;
        var sort = req.body.sort_data ; 
        var productdata;
        var skip;
        const limit = 2;
        if(page <=1){
skip = 0;
        }else{
            skip = (page - 1) * limit;
        }
      
    productdata = await Blog.find().sort({"created_on": sort }).skip(skip).limit(limit)
        
        res.status(200).send({ success: true, data: productdata });

        
    } catch (error) {
        res.status(400).send({ success: false, msg: "No blog found" });

    }
}


module.exports = { create_blog, get_blogs, get_all_blogs, search_blogs, likes, Views, blog_by_id, delete_blog, update, data,
    pagination
}