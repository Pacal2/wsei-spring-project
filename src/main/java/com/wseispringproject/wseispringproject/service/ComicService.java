package com.wseispringproject.wseispringproject.service;

import com.wseispringproject.wseispringproject.model.Comic;

import java.util.List;

public interface ComicService {
    public Comic saveComic(Comic comic);
    public List<Comic> getAllComics();
}
