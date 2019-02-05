FROM ubuntu:18.04

RUN apt-get update && apt-get install -y python3-pip
RUN pip3 install pipenv

COPY . /srv/www
WORKDIR /srv/www

ENV PIPENV_VENV_IN_PROJECT=1
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

RUN pipenv install --system --deploy

