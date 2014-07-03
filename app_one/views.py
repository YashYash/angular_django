from django.shortcuts import render
from django.shortcuts import render, redirect
from firebase import firebase


# Create your views here.

def home(request):
    return render(request, "global.html")



