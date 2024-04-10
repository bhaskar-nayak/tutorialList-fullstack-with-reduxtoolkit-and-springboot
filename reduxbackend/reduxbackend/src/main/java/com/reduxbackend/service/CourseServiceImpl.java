package com.reduxbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.reduxbackend.dao.CourseDAO;
import com.reduxbackend.model.Course;
import com.reduxbackend.utils.Response;


@Service
public class CourseServiceImpl implements CourseService{
	@Autowired
	CourseDAO courseDAO;
	@Override
	@Transactional
	public Response addCourse(Course course) {
		// TODO Auto-generated method stub
		return courseDAO.addCourse(course);
	}
	@Override
	public List<Course> list() {
		// TODO Auto-generated method stub
		return courseDAO.list();
	}
	@Override
	public Course getCourse(int id) {
		// TODO Auto-generated method stub
		return courseDAO.getCourse(id);
	}
	@Transactional
	@Override
	public Response deleteCourse(int id) {
		// TODO Auto-generated method stub
		return courseDAO.deleteCourse(id);
	}
	@Transactional
	@Override
	public Response updateCourse(Course course) {
		// TODO Auto-generated method stub
		return courseDAO.updateCourse(course);
	}
	
}
