import serial
import time
import random

from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Arduino Bluetooth Serial Setup:
arduino = serial.Serial(port='COM3', baudrate=115200, timeout=1)

# Commands:
"""
Set Speed Left: LXXXX
Set Speed Right: RXXXX

Get Left Current: LC000
Get Right Current: RC000

Get Left Object Distance: LD000
Get Right Object Distance: RD000

Get Battery Voltage: B0000
"""

# Data handler functions
def get_right_current():
    # Send get command
    # command = "RC000"
    # packet = bytearray(command, 'utf-8')
    # arduino.write(packet)
    # time.sleep(0.05)
    # # Read returned value
    # value = ""
    # for x in range(3):
    #     value += arduino.read().decode()
    # print("Right Current: " + value)
    # return value
    return str(random.randint(130, 145))

def get_left_current():
    # # Send get command
    # command = "LC000"
    # packet = bytearray(command, 'utf-8')
    # arduino.write(packet)
    # time.sleep(0.05)
    # # Read returned value
    # value = ""
    # for x in range(3):
    #     value += arduino.read().decode() 
    # print("Left Current: " + value)
    # return value

    return str(random.randint(125, 140))

def get_right_object():
    # Send get command
    command = "RD000"
    packet = bytearray(command, 'utf-8')
    arduino.write(packet)
    time.sleep(0.05)
    # Read returned value
    value = ""
    for x in range(3):
        value += arduino.read().decode() 
    print("Right Object: " + value)
    return value

def get_left_object():
    # Send get command
    command = "LD000"
    packet = bytearray(command, 'utf-8')
    arduino.write(packet)
    time.sleep(0.05)
    # Read returned value
    value = ""
    for x in range(3):
        value += arduino.read().decode() 
    print("Left Object: " + value)
    return value

def get_battery_voltage():
    # Send get command
    command = "B0000"
    packet = bytearray(command, 'utf-8')
    arduino.write(packet)
    time.sleep(0.05)
    # Read returned value
    value = ""
    for x in range(3):
        value += arduino.read().decode() 
    print("Battery: " + value)
    return value

def set_speed(wheel, speed):
    speed_nibble = bin(speed)[2:]
    if speed < 2:
        speed_nibble = "000" + speed_nibble
    elif (speed >= 2) & (speed < 4):
        speed_nibble = "00" + speed_nibble
    elif (speed >= 4 ) & (speed < 8):
        speed_nibble = "0" + speed_nibble
    else:
        pass

    if wheel == 'right':
        command = 'R' + speed_nibble
    else:
        command = 'L' + speed_nibble

    packet = bytearray(command, 'ascii')
    arduino.write(packet)
    print("Speed set.")

@api_view(['GET'])
def api_overview(request):
    # Return all API endpoints for user to access.
    api_urls = {
        'GET Data': '/data/',
        'POST Right Wheel Speed': '/control/right/<int:speed>/',
        'POST Left Wheel Speed': '/control/right/<int:speed>/',
    }

    return Response(api_urls)

@api_view(['GET'])
def get_data(request):
    # return all the data required.
    start = time.time()
    right_current = get_right_current()
    left_current = get_left_current()
    right_object = get_right_object()
    left_object = get_left_object()
    battery_voltage = get_battery_voltage()
    end = time.time()
    print("Time taken = " + str(end-start))
    data = {
        "RWC": right_current,
        "LWC": left_current,
        "ROD": right_object,
        "LOD": left_object,
        "BV": battery_voltage,
    }

    return Response(data)

@api_view(['GET'])
def set_right_speed(request, speed):
    set_speed('right', speed)
    return Response('Right speed updated.')

@api_view(['GET'])
def set_left_speed(request, speed):
    set_speed('left', speed)
    return Response('Left speed updated.')

