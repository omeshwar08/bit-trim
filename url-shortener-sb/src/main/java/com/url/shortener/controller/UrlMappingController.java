package com.url.shortener.controller;

import com.url.shortener.dtos.ClickEventDTO;
import com.url.shortener.dtos.URLMappingDTO;
import com.url.shortener.models.ClickEvent;
import com.url.shortener.models.User;
import com.url.shortener.service.UrlMappingService;
import com.url.shortener.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/urls")
@AllArgsConstructor
public class UrlMappingController {

    private UrlMappingService urlMappingService;
    private UserService userService;

    @PostMapping("/shorten")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<URLMappingDTO> createShortUrl(@RequestBody Map<String,String> request, Principal principal){
        String originalUrl = request.get("originalUrl");
        User user = userService.findByUserName(principal.getName());
        URLMappingDTO urlMappingDTO = urlMappingService.createShortUrl(originalUrl,user);
        return ResponseEntity.ok(urlMappingDTO);
    }

    @GetMapping("/myurls")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<URLMappingDTO>> getUserUrls(Principal principal){
        User user = userService.findByUserName(principal.getName());
        List<URLMappingDTO> urls = urlMappingService.getUrlsByUser(user);
        return ResponseEntity.ok(urls);
    }

    @GetMapping("/analytics/{shortUrl}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<ClickEventDTO>> getUrlAnalytics(@PathVariable String shortUrl, @RequestParam("startDate") String startDate, @RequestParam("endDate") String endDate){
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        LocalDateTime start = LocalDateTime.parse(startDate,dateTimeFormatter);
        LocalDateTime end = LocalDateTime.parse(endDate,dateTimeFormatter);
        List<ClickEventDTO> clickEventDTOS =  urlMappingService.getClickEventsByDate(shortUrl,start,end);
        return ResponseEntity.ok(clickEventDTOS);
    }

    @GetMapping("/totalClicks")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<LocalDate,Long>> getTotalClicksByDate(Principal principal,@RequestParam("startDate") String startDate, @RequestParam("endDate") String endDate){
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ISO_LOCAL_DATE;
        LocalDate start = LocalDate.parse(startDate,dateTimeFormatter);
        LocalDate end = LocalDate.parse(endDate,dateTimeFormatter);
        User user = userService.findByUserName(principal.getName());
        Map<LocalDate, Long> totalClicks = urlMappingService.getTotalClickByUserAndDate(user,start,end);
        return ResponseEntity.ok(totalClicks);
    }

}
