# Custom AI-Powered n8n

This is a self-hosted n8n instance with:
- AI Assistant (Gemini, OpenAI, HuggingFace)
- Multi-Agent System
- Workflow Templates
- File Upload & Analytics
- Fully customizable UI

## Deploy on Render
1. Fork this repo
2. Add GitHub Secrets (DOCKER_USERNAME, DOCKER_PASSWORD)
3. Push to master – GitHub Actions builds the Docker image
4. On Render, deploy that image with your environment variables
