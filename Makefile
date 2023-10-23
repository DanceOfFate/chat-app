run: run-android run-ios

run-android:
	cd chat_client && yarn run android

run-iod:
	cd chat_client && yarn run ios -- --simulator='iPhone 14 Pro Max'

server:
	  .\env\Scripts\activate && cd chat_backend && python manage.py runserver

