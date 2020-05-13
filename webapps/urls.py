"""webapps URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from CloudFantasy import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.home, name = 'home'), # home page
    url(r'^director$', views.director, name = 'director'), # director page
    url(r'^schedule$', views.schedule, name = 'schedule'), # director page
    url(r'^tickets$', views.tickets, name = 'tickets'), # director page
    url(r'^films$', views.films, name = 'films'), # film page
    url(r'^film1$', views.film1, name = 'film1'), # film page
    url(r'^film2$', views.film2, name = 'film2'), # film page
    url(r'^film3$', views.film3, name = 'film3'), # film page
    url(r'^film4$', views.film4, name = 'film4'), # film page
    url(r'^film5$', views.film5, name = 'film5'), # film page
    url(r'^behindTheScene$', views.bts, name = 'bts') # btspage
]
