package com.reduxbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.reduxbackend.model.Course;
import com.reduxbackend.service.CourseService;
import com.reduxbackend.utils.Response;
@CrossOrigin(origins = "*")
@RestController
public class CourseController {
	@Autowired
	CourseService courseService;
	ResponseEntity responseObject=null;
	@SuppressWarnings({ "rawtype, unchecked"})
	@PostMapping("/addcourse")
	public ResponseEntity addCourse(@RequestBody Course course) {
		try {
            Response response = courseService.addCourse(course);
            responseObject = new ResponseEntity(response, response.getOperation() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST);
        } catch (Exception error) {
            System.out.println(error);
            Response response = new Response();
            response.setMessage(error.getMessage());
            response.setOperation(false);
            response.setStatusCode(500);
            responseObject = new ResponseEntity(response, response.getOperation() ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST);
        }
        return responseObject;
    }
	//this api for listing all course details
	@SuppressWarnings({ "rawtype, unchecked"})
	@GetMapping("/listcourse")
    public ResponseEntity getCourse() {
        try {
            List<Course> course = courseService.list();
            responseObject = new ResponseEntity(course, HttpStatus.OK);
        } catch (Exception exception) {
            Response response = new Response();
            response.setMessage(exception.getMessage());
            response.setOperation(false);
            response.setStatusCode(500);
            System.out.println(exception);
            responseObject = new ResponseEntity(response, HttpStatus.OK);
        }
        return responseObject;
    }
	//this api used for get course details by id
	 @SuppressWarnings({ "rawtype, unchecked"})
	 @GetMapping("/course/{id}")
    public ResponseEntity getCourse(@PathVariable int id) {
        try {
            Course course = courseService.getCourse(id);
            responseObject = new ResponseEntity(course, HttpStatus.OK);
        } catch (Exception exception) {
            Response response = new Response();
            response.setMessage(exception.getMessage());
            response.setOperation(false);
            response.setStatusCode(500);
            System.out.println(exception);
            responseObject = new ResponseEntity(response, HttpStatus.OK);
        }
        return responseObject;
    }
	//this api for deleting course details by id
	@SuppressWarnings({ "rawtype, unchecked"})
	@DeleteMapping("/delete/{id}")
    public ResponseEntity deleteCourse(@PathVariable int id) {
        try {
            Response response = courseService.deleteCourse(id);
            responseObject = new ResponseEntity(response, response.getOperation() ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
        } catch (Exception exception) {
            Response response = new Response();
            response.setMessage(exception.getMessage());
            response.setOperation(false);
            response.setStatusCode(500);
            System.out.println(exception);
            responseObject = new ResponseEntity(response, HttpStatus.OK);
        }
        return responseObject;
	}
	//this api for used to update course details by id
	@SuppressWarnings({ "rawtype, unchecked"})
	@PutMapping("/update")
    public ResponseEntity updateCourse(@RequestBody Course course) {
        try {
            Response response = courseService.updateCourse(course);
            responseObject = new ResponseEntity(response, response.getOperation() ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
        } catch (Exception exception) {
            System.out.println(exception);
            Response response = new Response();
            response.setMessage(exception.getMessage());
            response.setOperation(false);
            response.setStatusCode(500);
            responseObject = new ResponseEntity(response, HttpStatus.OK);
        }
        return responseObject;
    }
}


