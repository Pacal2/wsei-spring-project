package com.wseispringproject.wseispringproject.controller;

import com.wseispringproject.wseispringproject.model.Comic;
import com.wseispringproject.wseispringproject.service.ComicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comic")
@CrossOrigin
public class ComicController {

    @Autowired
    private ComicService comicService;

    @PostMapping("/add")
    public String add(@RequestBody Comic comic){
        comicService.saveComic(comic);
        return "New comic is added";
    }

    @GetMapping("/getAll")
    public List<Comic> getAllComics() {
        return comicService.getAllComics();
    }
}
