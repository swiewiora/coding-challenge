'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const candidates = []

app.post('/candidates', function(req, res) {
    if (! req.body) return res.sendStatus(400);
    candidates.push(req.body);
    res.sendStatus(200);
});

app.get('/candidates/search', function(req, res) {
    if (! candidates.length) return res.sendStatus(404);
    if (! req.query.skills.length) return res.sendStatus(400);
    const skills = req.query.skills.split(',');
    
    const matchedCandidates = [];
    candidates.forEach((candidate) => {
      let matchedSkills = 0;
      skills.forEach((skill) => {
           if (candidate.skills.includes(skill)) matchedSkills++;
      })
      if (matchedSkills) matchedCandidates.push({
          matchedSkills,
          totalSkills: candidate.skills.length,
          candidate,
      })
    });

    if (! matchedCandidates.length) return res.sendStatus(404);
    
    const reducer = (acc, next) => {
      return acc.matchedSkills >= next.matchedSkills ?  acc : next;
    }
    const bestCandidate = matchedCandidates.reduce(reducer);
    res.send(bestCandidate.candidate);
});

app.listen(process.env.HTTP_PORT || 3000);
