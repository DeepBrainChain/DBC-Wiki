# 사용방법

## 전제조건

install nvidia-container-toolkit, see: https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html

## 서비스 시작

```bash
bash ./start-service.sh <config-name>
```

## 서비스 요청

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

## 서비스 중지

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

# Docker 이미지 구축 방법

다음은 모델 서비스 이미지를 구축하는 방법에 대한 개요입니다:

## 1. 전달 요구 사항 명확화

이미지를 구축하기 전에, 배포 이미지가 요구 목표에 부합하는지 확인하기 위해 요구 사항을 명확히 해야 합니다. 주요 요소는 다음과 같습니다:

- **모델 선택**: 배포할 모델 유형을 결정합니다. 예를 들어 텍스트 생성, 이미지 생성, 또는 멀티모달 모델 등을 선택합니다. 구체적인 모델은 Llama3-8B, Qwen1.5-110B, Falcon2-11B 중 선택할 수 있습니다.

- **배포 자원**: 배포할 하드웨어 자원을 명확히 하고, 특히 GPU 가속이 필요한지 여부와 사용할 GPU 유형(NVIDIA A100, H100, RTX4090 등)과 수량을 결정합니다.

- **배포 방식**: 로컬 배포인지 클라우드 배포인지, 모델 파일을 이미지에 포함시킬지 등을 결정합니다.

- **서비스 인터페이스 프로토콜**: 모델 서비스가 표준화된 방식으로 액세스될 수 있도록 적절한 API 프로토콜을 선택합니다. 다양한 모델 서비스 유형에 맞는 프로토콜이 제공됩니다. 예를 들어 텍스트 생성에는 OpenAI 프로토콜, Ollama 프로토콜, HF의 TGI 프로토콜 등이 있습니다.

- **성능 매개 변수**: 모델의 성능 목표를 명확히 합니다. 예를 들어 처리량, 응답 시간, 확장성 요구 사항 등이 포함됩니다.

## 2. 요구 사항에 가장 부합하는 오픈 소스 도구/프레임워크 선택

모델의 유형과 배포 환경에 따라, 이미지 구축 작업을 간소화하기 위해 적합한 오픈 소스 도구와 프레임워크를 선택합니다. 작업 유형에 따라 일반적인 도구/프레임워크는 다음과 같습니다:

- **텍스트 생성**: lmdeploy, Ollama, vllm, localai, TGI

- **이미지 생성**: ComfyUI, Stable Diffusion WebUI, localai

## 3. 개발 및 디버깅

이미지를 구축하기 전에, 모델이 컨테이너에서 정상적으로 작동하는지 확인하기 위해 개발 및 디버깅 과정을 거쳐야 합니다. 주요 단계는 다음과 같습니다:

- **배포 매개 변수 조정**: 작업 요구 사항 및 모델 매개 변수에 따라, Docker Compose 파일의 실행 매개 변수와 환경 변수를 조정하여 모델이 올바르게 작동하도록 합니다.

- **모델 적응**: 모델이 컨테이너 환경에서 원활하게 실행될 수 있도록 보장하며, 종속성 설치 및 구성 문제를 처리합니다. 특정 모델은 특정 라이브러리, 드라이버 또는 환경 변수 설정을 필요로 할 수 있습니다. Dockerfile에서 이러한 종속성을 정확하게 정의합니다. 일부 모델은 새로운 모델 구조를 도입할 수 있으며, 이러한 경우 추가적인 코드 수정이 필요할 수 있습니다.

- **버그 해결**: 이미지 실행 중 발생하는 오류를 디버깅하고, 오픈 소스 프로젝트에 존재할 수 있는 버그를 해결합니다.

- **코드 최적화**: 모델 테스트 실행 중 발견된 성능 문제를 최적화합니다. 예를 들어 자원 할당, 모델 스케줄링 등 논리를 최적화하여 실행 성능을 개선합니다.

## 4. 이미지 빌드

개발과 디버깅이 완료되면 Docker 이미지를 빌드할 수 있습니다. 구체적인 단계는 다음과 같습니다:

1. **Dockerfile 작성**: 상황에 따라 Dockerfile 작성 방법은 다음과 같은 방식이 있을 수 있습니다:

   - 오픈 소스 프로젝트 Dockerfile을 기반으로 수정 후 다시 빌드
   - 오픈 소스 이미지를 기본 이미지로 사용하여 수정된 내용을 추가 후 증분 빌드
   - Dockerfile을 처음부터 작성하여 새로운 맞춤형 이미지를 빌드

2. **이미지 빌드**:

   ```shell
   docker build -t <your-image-name>:<tag> .
   ```

3. **이미지 테스트**: GPU 자원을 사용하여 컨테이너를 실행하고 테스트하여 이미지의 모델 서비스가 요청에 정상적으로 응답하는지 확인합니다.

   ```shell
    docker run --gpus all -d <your-image-name>:<tag>
   ```

4. **이미지 레지스트리에 푸시**: 다중 노드 또는 클라우드 환경에서 배포하려면 Docker Hub, AWS ECR 등 컨테이너 이미지 레지스트리에 이미지를 푸시할 수 있습니다.

   ```shell
   docker push <your-image-name>:<tag>
   ```

   위의 단계를 통해 모델 서비스를 위한 Docker 이미지 구축을 완료할 수 있으며, 요구 사항을 충족하는 모델이 올바르게 작동하도록 할 수 있습니다.
