---
slug: Top-Floor-Nightclub
title: Top Floor Nightclub
published: 2023-07-03
updated: 2023-07-03
tags: [Venue, Event, "2023"]
excerpt: Come and see some of the events I've done at Top Floor!
hidden: false
---

<script>
  import CaptainBass from "./Captain-Bass.jpg?w=500;700;900;1200;1600&avif&srcset"
  import TaikiNulight from "./Taiki-Nulight.jpg?w=500;700;900;1200;1600&avif&srcset"
  import BreadGang from "./Bread-Gang.jpg?w=500;700;900;1200;1600&avif&srcset"
  import TerrenceAndPhillip from "./Terrence-And-Phillip.jpg?w=500;700;900;1200;1600&avif&srcset"
  import DonDarkoe from "./Dondarkoe.jpg?w=500;700;900;1200;1600&avif&srcset"
  import Blkout from "./Blkout.jpg?w=500;700;900;1200;1600&avif&srcset"
  import SammyTheSinner from "./Sammy-The-Sinner.jpg?w=500;700;900;1200;1600&avif&srcset"
  import BostonSwitch from "./Boston-Switch.webp?w=500;700;900;1200;1600&avif&srcset"
  import TheMovingStills from "./The-Moving-Stills.webp?w=500;700;900;1200;1600&avif&srcset"
  import BarbieNight from "./Barbie-Night.webp?w=500;700;900;1200;1600&avif&srcset"
  import Foolish2000 from "./Foolish-2000-RNB.webp?w=500;700;900;1200;1600&avif&srcset"
  import MagicMike from "./Magic-Mike.webp?w=500;700;900;1200;1600&avif&srcset"

  import TopFloor from "./Top-Floor.jpg?w=500;700;900;1200;1600&avif&srcset"

  import EventGrid from "$components/atoms/EventGrid.svelte"
  import EventItem from "$components/atoms/EventItem.svelte"

  import { monthDiff } from "$lib/utils";

  let started = new Date("March 1, 2023");
  let current = new Date(Date.now())
</script>

## Description

Top Floor Nightclub is one of the venues that I have the opportunity to work in as they're a client of Technical Alliance. If you’re ever in the area chances are I’m working so come on in and say hello! Working at Top Floor has been lots of fun. Although I’ve only been working there for {monthDiff(started, current)} months I have a myriad of weird and funny stories associated with the nightlife of Perth. I’ve had amazing opportunities to operate lighting for many large and borderline “famous” DJs which has been awesome.

<img srcset={TopFloor} alt="Top Floor Night Club" />

## Events

<EventGrid>
  <EventItem
    title="Captain Bass"
    description="I operated lighting for Captain Bass!"
    handle="captainbassbe"
    image="{CaptainBass}"
  />
  <EventItem
    title="Taiki Nulight"
    description="I operated lighting for Taiki Nulight!"
    handle="taikinulightuk"
    image="{TaikiNulight}"
  />
  <EventItem
    title="Bread Gang"
    description="I operated lighting for Bread Gang!"
    handle="breadgangtv"
    image="{BreadGang}"
  />
  <EventItem
    title="Terrence And Phillip"
    description="I operated lighting for Terrence And Phillip!"
    handle="terrenceandphillip"
    image="{TerrenceAndPhillip}"
  />
  <EventItem
    title="Don Darkoe"
    description="I operated lighting for Don Darkoe!"
    handle="dondarkoe"
    image="{DonDarkoe}"
  />
  <EventItem
    title="Blkout"
    description="I operated lighting for Blkout!"
    handle="1800blkout"
    image="{Blkout}"
  />
  <EventItem
    title="Sammy The Sinner"
    description="I operated lighting for Sammy The Sinner!"
    handle="sammythesinner_"
    image="{SammyTheSinner}"
  />
  <EventItem
    title="Boston Switch"
    description="I operated lighting for Boston Switch!"
    handle="bostonswitch"
    image="{BostonSwitch}"
  />
  <EventItem
    title="Moving Stills"
    description="I mixed FOH audio for The Moving Stills!"
    handle="themovingstills"
    image="{TheMovingStills}" 
  />
  <EventItem
    title="Barbie Night"
    description="I operated lighting for DJ Rog!"
    handle="djrog1998"
    image={BarbieNight}
  />
  <EventItem
    title="Foolish Party"
    description="I operated lighting for Aus #1 R&B DJ Ninobrown!"
    handle="dj_ninobrown"
    image="{Foolish2000}"
  />
  <EventItem
    title="Magic Mike"
    description="I operated lighting for a couple of Magic Mike shows!"
    handle="topshelfentertainment"
    image="{MagicMike}"
  />
</EventGrid>

<br>
