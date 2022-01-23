package com.wseispringproject.wseispringproject.service;

import com.wseispringproject.wseispringproject.model.Comic;
import com.wseispringproject.wseispringproject.repository.ComicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComicServiceImpl implements ComicService{

    @Autowired
    private ComicRepository comicRepository;

    @Override
    public Comic saveComic(Comic comic) {
        return comicRepository.save(comic);
    }

    @Override
    public List<Comic> getAllComics() {
        return comicRepository.findAll();
    }
}
