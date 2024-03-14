const Author = require("../models/author");
const asyncHandler = require("express-async-handler");


//Display all of the Authores 

exports.author_list = asyncHandler (async (req, res, next) =>{
    const allAuthors = await Author.find().sort({family_name: 1}).exec();
    
    res.render("author_list", {
      title: "Author List",
      author_list: allAuthors,
    });
});

// display detail page for a specific author. 
exports.author_detail =  asyncHandler(async(req, res, next) =>{

    res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
});

//display author create form on GET 

exports.author_create_get = asyncHandler(async(req, res, next)=>{

    res.send("NOT IMPLEMENTED: Author create POST");

});

// Handle author create on POSt

exports.author_create_post = asyncHandler(async(req, res, next)=>{

    res.send("NOT IMPLEMENTED: Author create POST");
});


//display author delete from GET 

exports.author_delete_get = asyncHandler(async(req, res, next)=>{

    res.send("NOT IMPLEMENTED: Author delete GET")
});

//Handle Author delete on POST.
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
});

// Display Author update form on GET.
exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update GET");
});

// Handle Author update on POST.
exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Author update POST");
});