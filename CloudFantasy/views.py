from django.shortcuts import render
#please specify package usage
from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse

from django.http import HttpResponse, Http404
from django.shortcuts import render, get_object_or_404
from django.core.exceptions import ObjectDoesNotExist
from django.core import serializers
import re,json
from django.utils import timezone
from django.utils.html import format_html
from django.db.models import Q
# Create your views here.


'''
Home Page
'''
def home(request):
	context = {}
	if not "visited" in request.session:
		request.session["visited"] = True
		context["visited"] = "pop-up-display"
	else:
		# context["visited"] = "pop-up-hide"
		context["visited"] = "pop-up-display"
	return render(request, 'CloudFantasy/home.html', context)

def director(request):
	return render(request, 'CloudFantasy/director.html', {'cur1':'cur_page'})

def schedule(request):
	return render(request, 'CloudFantasy/schedule.html', {'cur3':'cur_page'})

def tickets(request):
	return render(request, 'CloudFantasy/ticket.html', {'cur4':'cur_page'})

def films(request):
	return render(request, 'CloudFantasy/film1.html', {'cur2':'cur_page', "dk": "dk", "film_footer": "footer-red"})

def film1(request):
	return render(request, 'CloudFantasy/film1.html', {'cur2':'cur_page', "dk": "dk", "film_footer": "footer-red"})

def film2(request):
	return render(request, 'CloudFantasy/film2.html', {'cur2':'cur_page', "film_footer": "footer-red"})

def film3(request):
	return render(request, 'CloudFantasy/film3.html', {'cur2':'cur_page', "film_footer": "footer-red"})

def film4(request):
	return render(request, 'CloudFantasy/film4.html', {'cur2':'cur_page', "film_footer": "footer-red"})

def film5(request):
	return render(request, 'CloudFantasy/film5.html', {'cur2':'cur_page', "film_footer": "footer-red"})

def bts(request):
	return render(request, 'CloudFantasy/bts.html', {'cur5':'cur_page', "film_footer": "footer-red"})

