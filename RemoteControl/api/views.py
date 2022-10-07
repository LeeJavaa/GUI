import serial
import time

from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Arduino Bluetooth Serial Setup:
arduino = serial.Serial(port='COM12', baudrate=115200, timeout=1)

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
    command = "RC000"
    packet = bytearray(command, 'utf-8')
    arduino.write(packet)
    time.sleep(0.05)
    # Read returned value
    value = arduino.read()
    return value

def get_left_current():
    # Send get command
    command = "LC000"
    packet = bytearray(command, 'utf-8')
    arduino.write(packet)
    time.sleep(0.05)
    # Read returned value
    value = arduino.read()
    return value

def get_right_object():
    # Send get command
    command = "RD000"
    packet = bytearray(command, 'utf-8')
    arduino.write(packet)
    time.sleep(0.05)
    # Read returned value
    value = arduino.read()
    return value

def get_left_object():
    # Send get command
    command = "LD000"
    packet = bytearray(command, 'utf-8')
    arduino.write(packet)
    time.sleep(0.05)
    # Read returned value
    value = arduino.read()
    return value

def get_battery_voltage():
    # Send get command
    command = "B0000"
    packet = bytearray(command, 'utf-8')
    arduino.write(packet)
    time.sleep(0.05)
    # Read returned value
    value = arduino.read()
    return value

def set_speed(wheel, speed):
    speed_nibble = bin(speed, "b")
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

    packet = bytearray(command, 'utf-8')
    arduino.write(packet)

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
    data = {
        "RWC": get_right_current(),
        "LWC": get_left_current,
        "ROD": get_right_object(),
        "LOD": get_left_object(),
        "BV": get_battery_voltage(),
    }

    return Response(data)

def set_right_speed(request, speed):
    set_speed('right', speed)
    return Response('Right speed updated.')

def set_left_speed(request, speed):
    set_speed('left', speed)
    return Response('Left speed updated.')
