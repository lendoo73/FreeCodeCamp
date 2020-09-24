def add_time(start, duration, dayOfWeek = ""):

  days = 0
  daysLater = ""
  resultMeridiem = "AM"
  resultDay = ""
  nameOfDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  # define dataset from start attribute:
  # split the start string into a list:
  startList = start.split()
  # get starting time and meridiem from list:
  startTime = startList[0]
  startMeridiem = startList[1].lower()
  # get hours and minutes from starting time as integer:
  startTimeList = startTime.split(":")
  startHour = int(startTimeList[0])
  startMin = int(startTimeList[1])
  # change hours to the 24 hours time format:
  if startMeridiem == "pm":
    startHour += 12
  
  # define dataset from duration attribute:
  # split duration to the list:
  durationList = duration.split(":")
  # get duration hours and minutes from the list as integer:
  durationHours = int(durationList[0])
  durationMin = int(durationList[1])

  # create the result:
  # add duration minutes to the starting  minutes:
  resultMin = startMin + durationMin
  # correct the resultMin if it is more than 59 minutes:
  if resultMin > 59:
    resultMin -= 60
    durationHours += 1
  # add 0 to the resultMin if it is only one digit:
  if resultMin < 10:
    resultMin = "0{}".format(resultMin)
  # add duration hours to the starting hours:
  resultHour = startHour + durationHours
  # check if the result hours more than 23:
  if resultHour > 23:
    days = int(resultHour / 24)
    resultHour = resultHour % 24
    daysLater = " (next day)" if days == 1 else " ({} days later)".format(days)
  # change the result hour to the 12 hours format:
  if resultHour > 11:
    resultHour -= 12
    resultMeridiem = "PM"
  # correct 0 hours PM to 12 PM:
  if resultHour == 0:
    resultHour = 12
  # calculate the result day of the week:
  if dayOfWeek != "":
    # capitalize the first character of the dayOfWeek argument:
    dayOfWeek = dayOfWeek.lower().capitalize()
    # get the position of the day in the nameOfDays:
    dayOfWeekIndex = nameOfDays.index(dayOfWeek)
    resultDayIndex = (dayOfWeekIndex + days) % 7
    resultDay = ", " + nameOfDays[resultDayIndex]
  
  # format the result:
  new_time = "{}:{} {}{}{}".format(resultHour, resultMin, resultMeridiem, resultDay, daysLater)

  return new_time
