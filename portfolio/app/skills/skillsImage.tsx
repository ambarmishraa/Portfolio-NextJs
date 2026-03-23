import gcp from '../assets/svg/skills/gcp.svg'
import html from '../assets/svg/skills/html.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import illustrator from '../assets/svg/skills/illustrator.svg'
import docker from '../assets/svg/skills/docker.svg'
import adobeXd from '../assets/svg/skills/adobe-xd.svg'
import afterEffects from '../assets/svg/skills/after-effects.svg'
import css from '../assets/svg/skills/css.svg'
import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import nuxtJS from '../assets/svg/skills/nuxtJS.svg'
import react from '../assets/svg/skills/react.svg'
import svelte from '../assets/svg/skills/svelte.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import vue from '../assets/svg/skills/vue.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import bulma from '../assets/svg/skills/bulma.svg'
import capacitorjs from '../assets/svg/skills/capacitorjs.svg'
import coffeescript from '../assets/svg/skills/coffeescript.svg'
import memsql from '../assets/svg/skills/memsql.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import vitejs from '../assets/svg/skills/vitejs.svg'
import vuetifyjs from '../assets/svg/skills/vuetifyjs.svg'
import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import csharp from '../assets/svg/skills/csharp.svg'
import dart from '../assets/svg/skills/dart.svg'
import go from '../assets/svg/skills/go.svg'
import java from '../assets/svg/skills/java.svg'
import julia from '../assets/svg/skills/julia.svg'
import kotlin from '../assets/svg/skills/kotlin.svg'
import matlab from '../assets/svg/skills/matlab.svg'
import php from '../assets/svg/skills/php.svg'
import python from '../assets/svg/skills/python.svg'
import ruby from '../assets/svg/skills/ruby.svg'
import swift from '../assets/svg/skills/swift.svg'
import adobeaudition from '../assets/svg/skills/adobeaudition.svg'
import aws from '../assets/svg/skills/aws.svg'
import deno from '../assets/svg/skills/deno.svg'
import django from '../assets/svg/skills/django.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import gimp from '../assets/svg/skills/gimp.svg'
import git from '../assets/svg/skills/git.svg'
import graphql from '../assets/svg/skills/graphql.svg'
import lightroom from '../assets/svg/skills/lightroom.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import nginx from '../assets/svg/skills/nginx.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import opencv from '../assets/svg/skills/opencv.svg'
import premierepro from '../assets/svg/skills/premierepro.svg'
import pytorch from '../assets/svg/skills/pytorch.svg'
import selenium from '../assets/svg/skills/selenium.svg'
import strapi from '../assets/svg/skills/strapi.svg'
import tensorflow from '../assets/svg/skills/tensorflow.svg'
import webix from '../assets/svg/skills/webix.svg'
import wordpress from '../assets/svg/skills/wordpress.svg'

import azure from '../assets/svg/skills/azure.svg'
import blender from '../assets/svg/skills/blender.svg'
import fastify from '../assets/svg/skills/fastify.svg'
import figma from '../assets/svg/skills/figma.svg'
import flutter from '../assets/svg/skills/flutter.svg'
import haxe from '../assets/svg/skills/haxe.svg'
import ionic from '../assets/svg/skills/ionic.svg'
import markdown from '../assets/svg/skills/markdown.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import picsart from '../assets/svg/skills/picsart.svg'
import sketch from '../assets/svg/skills/sketch.svg'
import unity from '../assets/svg/skills/unity.svg'
import wolframalpha from '../assets/svg/skills/wolframalpha.svg'
import node from '../assets/svg/skills/node.svg'
import canva from '../assets/svg/skills/canva.svg'
import ubuntu from '../assets/svg/skills/ubuntu.svg'
import laravel from '../assets/svg/skills/laravel.svg'


export const skillsImage = (skill: string): string | undefined => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp': return gcp.src;
        case 'html': return html.src;
        case 'photoshop': return photoshop.src;
        case 'docker': return docker.src;
        case 'illustrator': return illustrator.src;
        case 'adobe xd': return adobeXd.src;
        case 'after effects': return afterEffects.src;
        case 'css': return css.src;
        case 'angular': return angular.src;
        case 'javascript': return javascript.src;
        case 'next js': return nextJS.src;
        case 'nuxt js': return nuxtJS.src;
        case 'react': return react.src;
        case 'svelte': return svelte.src;
        case 'typescript': return typescript.src;
        case 'vue': return vue.src;
        case 'bootstrap': return bootstrap.src;
        case 'bulma': return bulma.src;
        case 'capacitorjs': return capacitorjs.src;
        case 'coffeescript': return coffeescript.src;
        case 'memsql': return memsql.src;
        case 'mongodb': return mongoDB.src;
        case 'mysql': return mysql.src;
        case 'postgresql': return postgresql.src;
        case 'tailwind': return tailwind.src;
        case 'vitejs': return vitejs.src;
        case 'vuetifyjs': return vuetifyjs.src;
        case 'c': return c.src;
        case 'c++': return cplusplus.src;
        case 'c#': return csharp.src;
        case 'dart': return dart.src;
        case 'go': return go.src;
        case 'java': return java.src;
        case 'kotlin': return kotlin.src;
        case 'julia': return julia.src;
        case 'matlab': return matlab.src;
        case 'php': return php.src;
        case 'python': return python.src;
        case 'ruby': return ruby.src;
        case 'swift': return swift.src;
        case 'adobe audition': return adobeaudition.src;
        case 'aws': return aws.src;
        case 'deno': return deno.src;
        case 'django': return django.src;
        case 'firebase': return firebase.src;
        case 'gimp': return gimp.src;
        case 'git': return git.src;
        case 'graphql': return graphql.src;
        case 'lightroom': return lightroom.src;
        case 'materialui': return materialui.src;
        case 'nginx': return nginx.src;
        case 'numpy': return numpy.src;
        case 'opencv': return opencv.src;
        case 'premiere pro': return premierepro.src;
        case 'pytorch': return pytorch.src;
        case 'selenium': return selenium.src;
        case 'strapi': return strapi.src;
        case 'tensorflow': return tensorflow.src;
        case 'webix': return webix.src;
        case 'wordpress': return wordpress.src;
        case 'azure': return azure.src;
        case 'blender': return blender.src;
        case 'fastify': return fastify.src;
        case 'figma': return figma.src;
        case 'flutter': return flutter.src;
        case 'haxe': return haxe.src;
        case 'ionic': return ionic.src;
        case 'markdown': return markdown.src;
        case 'microsoft office': return microsoftoffice.src;
        case 'picsart': return picsart.src;
        case 'sketch': return sketch.src;
        case 'unity': return unity.src;
        case 'wolframalpha': return wolframalpha.src;
        case 'canva': return canva.src;
        case 'node js': return node.src;
        case 'ubuntu': return ubuntu.src;
        case 'laravel': return laravel.src;
        default: return undefined;
    }
}
