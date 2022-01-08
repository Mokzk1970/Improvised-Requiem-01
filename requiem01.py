Clock.bpm = 100
Scale.default.set("major")

p1>>MidiOut(PxRand(2,14),dur=PRand(1,4),oct=4,amp=0.7,channel=0) #Muffled Bells Yoshimi

p2>>MidiOut(PxRand(9),dur=7,amp=0.7,channel=2) #Violin solo

p5.stop()

p3>>MidiOut(PxRand(4,8),dur=6,amp=0.7,channel=3) #Flute solo

d1>>MidiOut(PxRand([1,2,4,5,8,9,10]),dur=PRand(3,5),oct=4,amp=0.7,channel=6) #All Percusion1

d2>>MidiOut(PxRand([0,3,7]),dur=PRand(19,25),oct=3,amp=1,channel=7) #All Percusion2

p4>>MidiOut(PxRand(7),dur=5,oct=3,amp=0.8,channel=4) #Bass Trombone solo

p5>>MidiOut(PxRand(4,10),dur=9,amp=0.7,channel=1) #Trumpet solo

p6>>MidiOut(PxRand(12),dur=PRand(1,13),oct=(5,6),amp=0.9,channel=5) #Dist Guitar1 Yoshimi

p7>>MidiOut(PxRand(6,15),dur=[1,1/2,1/2,1/2,1/2,1,1],oct=5,amp=0.5,sus=2,channel=8) #Piano Yoshimi
