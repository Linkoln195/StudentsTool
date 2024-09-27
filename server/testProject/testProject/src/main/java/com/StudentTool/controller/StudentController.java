package com.StudentTool.controller;

import com.StudentTool.model.Student;
import com.StudentTool.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping
    public List<Student> getStudents() {
        return service.findAllStudents();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Student createStudent(@RequestBody Student student) {
        return service.addStudent(student);
    }

    @DeleteMapping
    public String deleteStudent(@RequestParam(name = "studentId") String studentId) {
        return service.deleteStudent(studentId);
    }

}
