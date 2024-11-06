# How to use

## Prerequisites

install nvidia-container-toolkit, see: https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html

## Start the service

```bash
bash ./start-service.sh <config-name>
```

## Request the service

### openai-text api

```bash
bash ./request-service-openai-text.sh <model>
```

### ollama-text api

```bash
bash ./request-service-ollama-text.sh <model>
```

### openai-image api

```bash
bash ./request-service-openai-image.sh <model>
```

## Stop the service

```bash
bash ./stop-service.sh <config-name>
```

## Table: config-name -> model & api-protocol

| config-name             | model                  | api-protocol |
| ----------------------- | ---------------------- | ------------ |
| llama3-8b               | Llama3-8B              | openai-text  |
| llama3-70b_1            | Llama3-70B             | openai-text  |
| llama3-70b_4            | Llama3-70B             | openai-text  |
| qwen1.5-110b_1          | Qwen1.5-110B           | openai-text  |
| qwen1.5-110b_4          | Qwen1.5-110B           | openai-text  |
| yi1.5-34b               | Yi1.5-34B              | openai-text  |
| qwen2-72b_1             | Qwen2-72B              | openai-text  |
| qwen2-72b_4             | Qwen2-72B              | openai-text  |
| falcon2-11b             | Falcon2-11B            | openai-text  |
| openbiollm-llama3-70b_1 | OpenBioLLM-Llama3-70B  | openai-text  |
| openbiollm-llama3-70b_4 | OpenBioLLM-Llama3-70B  | openai-text  |
| minicpm-v2.5            | MiniCPM-Llama3-V2.5    | ollama-text  |
| codestral-22b-v0.1      | Codestral-22B-v0.1     | openai-text  |
| gemma2-27b_4            | Gemma-2-27B            | openai-text  |
| llama3.1-405b_8         | Llama-3.1-405B         | openai-text  |
| mistral-123b_4          | Mistral-123B           | openai-text  |
| flux.1-dev              | FLUX.1-dev             | openai-image |
| nemotron-70b_2          | Llama-3.1-Nemotron-70B | openai-text  |
| nvlm-70b_4              | NVLM-D-72B             | openai-text  |

# How to build a docker image

Here is an overview of how to build a model service image:

## 1. Clarify delivery requirements

Before building an image, you first need to clarify the delivery requirements to ensure that the deployment image is consistent with the required goals. Here are some key elements:

- **Model selection**: Determine the type of model to be deployed, such as text, text, or multimodal. Determine the specific model, such as Llama3-8B, Qwen1.5-110B, or Falcon2-11B.

- **Deployment resources**: Clarify the hardware resources that will be used for deployment, especially whether GPU acceleration is required, and the type of GPU selected (such as NVIDIA A100, H100, RTX4090, etc.) and quantity.

- **Deployment method**: Determine the deployment method, whether it is local deployment or cloud deployment, whether the model file needs to be packaged into the image, etc.

- **Service interface protocol**: Select the appropriate API protocol to ensure that the model service can be accessed in a standardized way. Different types of model services have different protocols to choose from. For example, common protocols for Wenshengwen include OpenAI protocol, Ollama protocol, HF's TGI protocol, etc. >.

- **Performance parameters**: clarify some performance goals of the model, such as throughput, response time, scalability requirements, etc.

## 2. Find the open source tools/frameworks that best meet your needs

According to the type of model and deployment environment, choose the appropriate open source tools and frameworks to simplify the construction work. According to different types of tasks, common tool frameworks include:

- **Wenshengwen**: lmdeploy, Ollama, VLLM, Localai, TGI

- **Wenshengtu**: comfyui, stable-diffusion-webui, localai

## 3. Development and debugging

Before building the image, development and debugging are required to ensure that the model can run normally in the container. The steps of development and debugging include:

- **Adjust deployment parameters**: According to task requirements, model parameters, etc., adjust the running parameters, environment variables, etc. in the docker compose file to ensure the correct operation of the model.

- **Model adaptation**: Ensure that the model can run seamlessly in the container environment and handle the installation and configuration of dependencies. Some models may require specific libraries, drivers, or environment variable settings. Define these dependencies accurately in the Dockerfile. Some models may introduce new model structures, which require further customized code development to adapt.

- **Solve bugs**: Troubleshoot errors reported during the test image runtime to resolve possible bugs in open source projects.

- **Optimize code implementation**: Optimize code implementation such as resource allocation, model scheduling, and other logic for some performance issues found during model testing to ensure reasonable performance.

## 4. Image packaging

After completing development and debugging, you can start packaging the Docker image. Here are the specific steps:

1. **Write Dockerfile**: Depending on the situation, there are the following possible ways to write Dockerfile:

- Based on the open source project Dockerfile, modify it and rebuild it from scratch

- Based on the open source image as the base image, add the modified content and perform incremental build

- Write your own Dockerfile and build a new customized image from scratch

2. **Build the image**:

```bash
docker build -t <your-image-name>:<tag> .
```

3. **Test the image**: Use GPU resources to start the container and test it to ensure that the model service in the image can respond to requests normally.

```bash
docker run --gpus all -d <your-image-name>:<tag>
```

4. **Push to the image repository**: If you want to deploy in a multi-node or cloud environment, you can push the image to a container image repository such as Docker Hub, AWS ECR, etc.:

```bash
docker push <your-image-name>:<tag>
```

Through the above steps, you can successfully complete the construction of a Docker image for model service, ensuring that the model can run correctly and meet the requirements.
