# SmartFeeder

카메라, 무게·온습도 센서, 서버와 Android 앱을 연결한 반려동물 급식기 프로젝트입니다.

| 디렉터리 | 역할 |
| --- | --- |
| [SmartFeeder_Server](SmartFeeder_Server/) | Flask 서버, 급식 제어, 이미지 인식 |
| [SmartFeeder_App](SmartFeeder_App/) | Android 앱 |
| [SmartFeeder_Arduino](SmartFeeder_Arduino/) | ESP32 카메라 |
| [SmartFeeder_Arduino_Sensor](SmartFeeder_Arduino_Sensor/) | 온습도·무게 측정과 서버 전송 |
| [FeederApp_androidstudio](FeederApp_androidstudio/) | 초기 AWS IoT 앱 |
| [flaskProject](flaskProject/), [cloudtype](cloudtype/), [node-express](node-express/) | 서버와 배포 실험 |
| [calculator](calculator/), [test.github.io](test.github.io/), [test](test/) | 함께 보관한 실험 코드와 메모 |

## 로컬 설정

- 서버의 .env.example을 참고해 데이터베이스와 세션 서명 값을 프로세스 환경 변수로 설정합니다. 카메라와 모터 기능을 실행할 때는 CAMERA_URL과 MOTOR_URL도 설정합니다. 이미지 인식 실험에 필요한 모델 가중치는 로컬에서 준비합니다.
- 센서 스케치 폴더에서 local_config.example.h를 local_config.h로 복사하고 Wi-Fi와 서버 주소를 입력합니다.
- Android 앱의 기본 서버와 카메라 주소는 에뮬레이터용입니다. 실기기에서는 RetrofitClient.java와 strings.xml의 주소를 해당 환경에 맞춥니다. 초기 AWS IoT 앱을 사용할 때는 주소와 Cognito 설정 예시를 자신의 값으로 바꿉니다.
