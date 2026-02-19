Reverse Job Board – Candidate-Centric Hiring Platform
Project Overview

Reverse Job Board is a futuristic hiring platform where candidates list their skills anonymously, and companies pitch themselves to candidates. This flips traditional job boards by putting candidates in control, encouraging better matches, fairer hiring, and thoughtful company engagement.

Deployed Project :- https://pitch-perfect-hire.vercel.app/

Key highlights:

Candidate anonymity until a pitch is accepted

AI-assisted skill matching (optional)

Company pitch system with tracking and moderation

Interactive dashboards and notifications

Analytics on matches and engagement trends

This project demonstrates full-stack development, matching algorithms, secure identity handling, moderation tools, and advanced UX design.

Features
1. Candidate Dashboard

Register anonymously with a unique username or ID

Build a skills profile:

Technical skills

Soft skills

Interests and career goals

Control visibility of skills (public/private/selective)

View and manage company pitches

2. Company Dashboard

Register with verified company account

Browse candidate skills anonymously

Pitch candidates with:

Role description

Value proposition

Compensation and perks

Track pitch status (sent, viewed, accepted, rejected)

3. Matching Algorithm

Suggest candidates to companies based on skill and interest alignment

Suggest companies to candidates based on desired skill growth and industry

Relevance ranking and scoring for better matches

4. Notifications & Alerts

In-app notifications for:

New pitches

Pitch acceptance/rejection

System updates

Optional email notifications for critical events

5. Moderation & Safety

Flag inappropriate pitches or spam

Admin dashboard for content moderation and user management

Secure role-based access (Candidate, Company, Admin)

6. UX & Interface

Modern, responsive design for mobile and desktop

Interactive visual cues highlighting skill matches

Simple pitch flow and skill input for users

Tech Stack

Frontend: React, Tailwind CSS (or Material UI)

Backend: Node.js + Express

Database: MongoDB / PostgreSQL

AI Integration: Optional AI-assisted pitch generation and skill suggestion

Notifications: WebSockets or Push notifications

Other: CORS, dotenv for environment variables, secure backend API key handling

Architecture Overview
Frontend (React)  <--->  Backend (Node.js/Express)  <--->  Database
       |                            |
       |-- Candidate Dashboard       |
       |-- Company Dashboard         |
       |-- Notifications UI         |
                                     
Backend handles:
- CRUD operations for candidates, companies, and pitches
- Matching algorithm
- Moderation and role-based access control
- AI integration for skill suggestions or pitch summaries

Installation & Setup
Backend

Clone the repository:

git clone https://github.com/yourusername/reverse-job-board.git
cd reverse-job-board/server


Install dependencies:

npm install


Create .env file:

PORT=5000
AI_API_KEY=your_secure_api_key_here


Start backend server:

node server.js

Frontend

Navigate to frontend folder:

cd ../client


Install dependencies:

npm install


Start frontend:

npm start


Open in browser: http://localhost:3000

Usage

Candidates register anonymously and create their skill profiles.

Companies browse skills anonymously and send pitches.

Candidates receive notifications and can accept/reject pitches.

Admins can moderate content and manage users.

Matching algorithm provides recommended connections for both candidates and companies.

Future Enhancements

Multi-project support for companies

Real-time collaboration for distributed hiring teams

AI-driven candidate-company compatibility scoring

Offline mode for candidates to view skills without internet

Integration with LinkedIn, GitHub, or other portfolio platforms
