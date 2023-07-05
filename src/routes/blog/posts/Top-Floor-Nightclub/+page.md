---
id: 6
slug: Top-Floor-Nightclub
title: Top Floor Nightclub
published: 2023-07-03
updated: 2023-07-03
tags: [Venue, "2023"]
hidden: false
---

<script>
  import BarbieNight from "./Barbie-Night.webp?w=500;700;900;1200;1600&avif&srcset"
  import Foolish2000 from "./Foolish-2000-RNB.webp?w=500;700;900;1200;1600&avif&srcset"
  import MagicMike from "./Magic-Mike.webp?w=500;700;900;1200;1600&avif&srcset"

  import EventGrid from "$components/atoms/EventGrid.svelte"
  import EventItem from "$components/atoms/EventItem.svelte"

  import { monthDiff } from "$lib/utils";

  let started = new Date("March 1, 2023");
  let current = new Date(Date.now())
</script>

## Description

Top Floor Nightclub is one of the venues that I have the opportunity to work in as they are a client of Technical Alliance. If you’re ever in the area chances are I’m working so come on in and say hello! Working at Top Floor has been lots of fun. Although I’ve only been working there for {monthDiff(started, current)} months I have a myriad of weird and funny stories associated with the nightlife of Perth. I’ve had amazing opportunities to operate lighting for many large and borderline “famous” DJs which has been awesome.

<EventGrid>
  <EventItem title="Barbie Night" description="For the barbie night I had the opportunity to operate lighting for the wonderful DJ Rog!" handle="djrog1998" image={BarbieNight} />
  <EventItem title="Foolish Party" description="For the Foolish party I had the opportunity to operate lighting for Aus #1 HipHop and R&B DJ Nino Brown!" handle="dj_ninobrown" image="{Foolish2000}"/>
  <EventItem title="Magic Mike" description="I've also had the opportunity to operate lighting for a couple of Magic Mike shows!" handle="topshelfentertainment" image="{MagicMike}" />
</EventGrid>

<br>
