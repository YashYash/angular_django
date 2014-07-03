from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'database_practice.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'app_one.views.home', name='home'),
    url(r'^admin/', include(admin.site.urls)),
)
