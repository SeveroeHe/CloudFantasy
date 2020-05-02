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
	return render(request, 'CloudFantasy/home.html', {})

def director(request):
	return render(request, 'CloudFantasy/director.html', {'cur1':'cur_page'})

def schedule(request):
	return render(request, 'CloudFantasy/schedule.html', {'cur3':'cur_page'})

def tickets(request):
	return render(request, 'CloudFantasy/ticket.html', {'cur4':'cur_page'})