package com.wseispringproject.wseispringproject.repository;

import com.wseispringproject.wseispringproject.model.Comic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComicRepository extends JpaRepository<Comic, Integer> {
}
