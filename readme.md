# Full Cycle Rocks - Docker Challenge 02

This repository contains a simple Go application that prints "Full Cycle Rocks!!" when executed. The project demonstrates how to create an optimized Docker container image for a Go application.

## Project Overview

The main goals of this project are:
- Create a Go application that prints "Full Cycle Rocks!!"
- Package it in a Docker container
- Optimize the Docker image size to be less than 2MB
- Publish the image to Docker Hub

## Docker Image

The Docker image is available on Docker Hub:

```bash
docker pull devfullcycle/go-challenge:latest
```

## Running the Application

To run the application using Docker:

```bash
docker run --rm devfullcycle/go-challenge:latest
```

You should see the output:

```
Full Cycle Rocks!!
```

## How it Works

The application is built using a multi-stage Docker build:
1. The first stage compiles the Go application using a Go base image
2. The second stage uses a minimal `scratch` image and copies only the compiled binary
3. This results in a very small Docker image (less than 2MB)

## Building Locally

If you want to build the image locally:

```bash
# Clone the repository
git clone <repository-url>
cd desafio\ 02\ docker\ fullcyclerocks

# Build the Docker image
docker build -t go-challenge .

# Run the container
docker run --rm go-challenge
```

## Technologies Used

- Go programming language
- Docker multi-stage builds
- Minimal scratch Docker image

## Project Structure

- `main.go` - The Go application source code
- `Dockerfile` - Instructions for building the Docker image
- `README.md` - This file

## License

This project is part of the Full Cycle Developer training course.