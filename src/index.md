---
layout: layout.njk
title: Home
stylesheet: index.css
infoText: "WHAT WE'VE BEEN UP TO:"

preloadImages:
  - "{{ 'assets/Drawing Images/2/Head.png' | prefixedUrl }}"
  - "{{ 'assets/Drawing Images/2/Torso.png' | prefixedUrl }}"
  - "{{ 'assets/Drawing Images/2/Upper Arm.png' | prefixedUrl }}"
  - "{{ 'assets/Drawing Images/2/Lower Arm.png' | prefixedUrl }}"
  - "{{ 'assets/Drawing Images/2/Right Hand.png' | prefixedUrl }}"
  - "{{ 'assets/Drawing Images/2/Hammer.png' | prefixedUrl }}"
  - "{{ 'assets/Drawing Images/2/Left hand.png' | prefixedUrl }}"
  - "{{ 'assets/Drawing Images/2/Upper Leg.png' | prefixedUrl }}"
  - "{{ 'assets/Drawing Images/2/Lower Leg.png' | prefixedUrl }}"
  - "{{ 'assets/Drawing Images/2/Feet.png' | prefixedUrl }}"

backgroundImages:
  - { src: "{{ 'assets/Drawing Images/Film insert/Film Border Blurry Edges1.png' | prefixedUrl }}", class: "film-border" }
  - { src: "{{ 'assets/Drawing Images/Film insert/background-lights.png' | prefixedUrl }}", class: "shadow-lights" }

environmentImages:
  - { src: "{{ 'assets/Drawing Images/2/Overhead-Lamp.png' | prefixedUrl }}", class: "lamp" }

figureImages:
  - name: "right-arm-swing"
    images:
      - { src: "{{ 'assets/Drawing Images/2/Upper Arm.png' | prefixedUrl }}", class: "upper-arm" }
      - { src: "{{ 'assets/Drawing Images/2/Lower Arm.png' | prefixedUrl }}", class: "lower-arm" }
      - { src: "{{ 'assets/Drawing Images/2/Right Hand.png' | prefixedUrl }}", class: "right-hand" }
      - { src: "{{ 'assets/Drawing Images/2/Hammer.png' | prefixedUrl }}", class: "hammer" }

  - name: "lower-left-arm-slide"
    images:
      - { src: "{{ 'assets/Drawing Images/2/Lower Arm.png' | prefixedUrl }}", class: "lower-left-arm" }
      - { src: "{{ 'assets/Drawing Images/2/Left hand.png' | prefixedUrl }}", class: "left-hand" }

  - name: "static-figure"
    images:
      - { src: "{{ 'assets/Drawing Images/2/Head.png' | prefixedUrl }}", class: "head" }
      - { src: "{{ 'assets/Drawing Images/2/Torso.png' | prefixedUrl }}", class: "torso" }
      - { src: "{{ 'assets/Drawing Images/2/Upper Arm.png' | prefixedUrl }}", class: "upper-left-arm" }
      - { src: "{{ 'assets/Drawing Images/2/Upper Leg.png' | prefixedUrl }}", class: "upper-leg" }
      - { src: "{{ 'assets/Drawing Images/2/Lower Leg.png' | prefixedUrl }}", class: "lower-leg" }
      - { src: "{{ 'assets/Drawing Images/2/Feet.png' | prefixedUrl }}", class: "feet" }
---