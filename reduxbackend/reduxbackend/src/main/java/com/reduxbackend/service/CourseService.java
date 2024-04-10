package com.reduxbackend.service;

import java.util.List;

import com.reduxbackend.model.Course;
import com.reduxbackend.utils.Response;

public interface CourseService {
	public Response addCourse(Course course);
	public List<Course> list();
	public Course getCourse(int id);
	public Response deleteCourse(int id);
	public Response updateCourse(Course course);
}
