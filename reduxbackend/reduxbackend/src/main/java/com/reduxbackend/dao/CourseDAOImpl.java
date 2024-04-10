package com.reduxbackend.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.reduxbackend.model.Course;
import com.reduxbackend.utils.Response;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository
public class CourseDAOImpl implements CourseDAO{
	@PersistenceContext
    private EntityManager entityManager;
	@Override
	public Response addCourse(Course course) {
		 Response response = new Response();
	        try {
	            entityManager.persist(course);
	            response.setMessage("Product added successfully");
	            response.setOperation(true);
	            response.setStatusCode(201);
	        } catch (Exception e) {
	            response.setMessage("Product add failed");
	            response.setOperation(false);
	            response.setStatusCode(500);
	        }
	        return response;
	    }
	//this repo for listing all course details
	@Override
	public List<Course> list() {
		// TODO Auto-generated method stub
		return entityManager.createQuery("SELECT c FROM Course c", Course.class).getResultList();
    }
	//this repo used for get course details by id
	@Override
	public Course getCourse(int id) {
		// TODO Auto-generated method stub
		return entityManager.find(Course.class, id);
	}
	//this repo used for delete course details by id
	@Override
	public Response deleteCourse(int id) {
		// TODO Auto-generated method stub
		 Response response = new Response();
	        try {
	            Course course = entityManager.find(Course.class, id);
	            entityManager.remove(course);
	            response.setMessage("Delete successful");
	            response.setOperation(true);
	            response.setStatusCode(200);
	        } catch (Exception e) {
	            response.setMessage("Delete failed: " + e.getMessage());
	            response.setOperation(false);
	            response.setStatusCode(500);
	        }
	        return response;
	    }
	//this repo used for updating course details by id
	@Override
	public Response updateCourse(Course course) {
		// TODO Auto-generated method stub
		 Response response = new Response();
	        try {
	            entityManager.merge(course);
	            response.setMessage("Update successful");
	            response.setOperation(true);
	            response.setStatusCode(200);
	        } catch (Exception e) {
	            response.setMessage("Update failed: " + e.getMessage());
	            response.setOperation(false);
	            response.setStatusCode(500);
	        }
	        return response;
	    }
	}
	
