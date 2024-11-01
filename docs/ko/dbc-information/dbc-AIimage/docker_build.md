# 如何使用

## 前提条件

install nvidia-container-toolkit, see: https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html

## 启动服务

```bash
bash ./start-service.sh <config-name>
```

## 请求服务

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

## 停止服务

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

# 如何构建docker镜像

下面是关于如何构建一个模型服务镜像的概述：

## 1. 明确交付需求

在构建镜像之前，首先需要明确交付需求，以确保部署镜像与需求目标的一致性。以下是一些关键要素：

- **模型选择**：确定需要部署的模型类型，如是文生文、文生图、还是多模态等。确定具体模型，如 Llama3-8B、Qwen1.5-110B 或 Falcon2-11B。

- **部署资源**：明确将用于部署的硬件资源，特别是是否需要 GPU 加速，以及选择的 GPU 类型（如 NVIDIA A100、H100、RTX4090等）以及数量。

- **部署方式**：确定部署的方式，是本地部署还是云端部署，模型文件是否需要打包进镜像等。

- **服务接口协议**：选择合适的 API 协议，确保模型服务可以通过标准化的方式被访问。不同类型的模型服务有不同的协议可供选择。如文生文常见的协议包括 openai协议，ollama协议，hf的tgi协议 等。

- **性能参数**：明确模型的一些性能目标，如吞吐量、响应时间、扩展性要求等。

## 2. 找到最符合需求的开源工具/框架

根据模型的类型和部署环境，选择合适的开源工具和框架以简化构建工作。根据不同类型的任务，常见的工具框架包括：

- **文生文**：lmdeploy，ollama，vllm，localai，tgi

- **文生图**：comfyui, stable-diffusion-webui, localai

## 3. 开发调试

在构建镜像之前，需要进行开发调试，确保模型能够在容器中正常运行。开发调试的步骤包括：

- **调整部署参数**：根据任务需求，模型参数等，调整docker compose file中的运行参数，环境变量等，确保模型的正确运行。

- **模型适配**：确保模型可以在容器环境中无缝运行，处理依赖项的安装和配置问题。某些模型可能需要特定的库、驱动程序或环境变量设置等。在 Dockerfile 中准确地定义这些依赖。某些模型可能引入了新的模型结构，需进一步对代码进行定制化开发实现适配。

- **解决 bug**：根据测试镜像运行时的报错进行排查，解决开源项目中可能存在的bug。

- **优化代码实现**：针对模型测试运行中发现的一些性能问题，优化代码实现如资源分配，模型调度等逻辑，确保合理的运行性能。

## 4. 镜像打包

完成开发和调试后，可以开始打包 Docker 镜像。以下是具体步骤：

1. **编写 Dockerfile**：根据不同情况，Dockerfile的编写有如下可能的方式：

   - 基于开源项目Dockerfile，修改后重新从头构建
   - 基于开源镜像作为基础镜像，加入修改的内容后进行增量构建
   - 自行编写Dockerfile，从头构建一个新的定制化镜像

2. **构建镜像**：

   ```bash
   docker build -t <your-image-name>:<tag> .
   ```

3. **测试镜像**：使用 GPU 资源启动容器并进行测试，确保镜像中的模型服务可以正常响应请求。

   ```bash
   docker run --gpus all -d <your-image-name>:<tag>
   ```

4. **推送到镜像仓库**：如果要在多节点或云端环境中部署，可以将镜像推送到 Docker Hub、AWS ECR 等容器镜像仓库：

   ```bash
   docker push <your-image-name>:<tag>
   ```

通过以上步骤，你可以顺利完成一个用于模型服务的 Docker 镜像构建，确保模型能够正确运行并满足需求。
