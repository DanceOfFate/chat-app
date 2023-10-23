run: run-android run-ios expo-start

run-android:
	cd chat_client && yarn run android

run-ios:
	cd chat_client && yarn run ios -- --simulator='iPhone 14 Pro Max'

expo-start:
	cd chat_client && npx expo start

server:
	  .\env\Scripts\activate && cd chat_backend && python manage.py runserver

