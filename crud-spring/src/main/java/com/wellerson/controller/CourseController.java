package com.wellerson.controller;

import java.util.List;

import com.wellerson.model.Course;
import com.wellerson.repository.CourseRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/cursos")
public class CourseController {
    
    private final CourseRepository courseRepository; 

    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    } 
    
    @GetMapping(value = "/{id}")
	public ResponseEntity<Course> findById(@PathVariable Long id)  {
		Course course = this.courseRepository.findById(id).get();
		return ResponseEntity.ok(course);
	}

    @DeleteMapping(value = "/{id}")
	public void deleteById(@PathVariable Long id)  {
		this.courseRepository.deleteById(id);
	}
}
