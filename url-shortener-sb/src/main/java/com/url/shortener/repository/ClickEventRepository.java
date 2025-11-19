package com.url.shortener.repository;

import com.url.shortener.models.ClickEvent;
import com.url.shortener.models.UrlMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ClickEventRepository extends JpaRepository<ClickEvent,Long> {
    List<ClickEvent> findByUrlMappingAndClickedDateBetween(UrlMapping urlMapping, LocalDateTime start, LocalDateTime end);
    List<ClickEvent> findByUrlMappingInAndClickedDateBetween(List<UrlMapping> urlMappings,LocalDateTime start, LocalDateTime end);
}
