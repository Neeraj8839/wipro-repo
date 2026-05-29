package com.ecommerce.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

@WebFilter("/*")
public class LoggingFilter implements Filter {

    public void init(FilterConfig fConfig)
            throws ServletException {

    }

    public void doFilter(ServletRequest request,
            ServletResponse response,
            FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest req =
                (HttpServletRequest) request;

        System.out.println(
                "IP: " + req.getRemoteAddr());

        System.out.println(
                "URL: " + req.getRequestURI());

        chain.doFilter(request, response);
    }

    public void destroy() {

    }
}