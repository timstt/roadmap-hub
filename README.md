# Roadmap Hub

A web app where users of a product propose ideas and vote on them, while the team prioritizes the ideas with RICE scoring and publishes a public roadmap and changelog.

Roadmap Hub is also a learning project: it is built stage by stage to practice the full path of a backend developer, from the first Express route to a production deployment.

> 🚧 **Status: early development.** The environment is set up and the plan is ready. The API is the next step, so there is nothing to run yet.

## Planned features

- Submit ideas and vote for them
- RICE prioritization (Reach, Impact, Confidence, Effort) to rank ideas
- Public roadmap board with idea statuses (for example `New`, `Planned`)
- Changelog of shipped changes

## Tech stack (planned)

| Area | Tools |
| --- | --- |
| Backend | Node.js, TypeScript, Express |
| Databases | PostgreSQL (main data), Redis (cache), MongoDB (activity feed) |
| Frontend | React, Vite |
| Testing | Vitest, supertest |
| DevOps | Docker, GitHub Actions |

## Development stages

- [x] 0. Setup: Node.js, Git, repository
- [ ] 1. JS/TS basics and the first server
- [ ] 2. Own REST API
- [ ] 3. PostgreSQL
- [ ] 4. Authentication
- [ ] 5. Transactions, ACID and SQL performance
- [ ] 6. Testing
- [ ] 7. External APIs
- [ ] 8. React interface
- [ ] 9. NoSQL, BASE, caching and security
- [ ] 10. Background jobs, file uploads, webhooks and search
- [ ] 11. Production: Docker, CI, deployment

## Planned repository structure

```
roadmap-hub/
  apps/
    api/          # Express + TypeScript
    web/          # React + Vite
  docs/           # notes, schema, decisions
  docker-compose.yml
  .github/workflows/ci.yml
```

## Running the project

Setup instructions will be added once the API is in place.

## Author

Tymofii Stukalo ([@timstt](https://github.com/timstt))
