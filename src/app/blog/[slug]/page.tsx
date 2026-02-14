import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY, BLOG_POSTS } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BLOG_CONTENT: Record<string, { content: string }> = {
  "hard-water-problems-arizona": {
    content: `
Arizona is known for having some of the hardest water in the nation. If you live in the Phoenix area, you've likely noticed the effects of hard water in your home—from crusty buildup on faucets to spots on your dishes.

## What is Hard Water?

Hard water contains high concentrations of dissolved minerals, primarily calcium and magnesium. In Arizona, our water comes from the Colorado River and local aquifers, both of which pick up minerals as they flow through the desert landscape.

## Signs of Hard Water in Your Home

- **White buildup on faucets and showerheads** - This crusty deposit is calcium and magnesium scale
- **Spots on dishes and glassware** - Even after washing, dishes may appear cloudy
- **Dry, itchy skin and hair** - Hard water makes it difficult to rinse away soap completely
- **Soap that doesn't lather well** - You may find yourself using more soap and shampoo
- **Fading laundry** - Clothes may look dingy and feel stiff
- **Reduced water pressure** - Scale buildup can clog pipes over time

## Effects on Your Plumbing

Hard water can cause significant damage to your plumbing system over time:

1. **Water heater efficiency** - Scale buildup on heating elements makes your water heater work harder, increasing energy costs
2. **Pipe corrosion** - Mineral deposits can narrow pipes and reduce water flow
3. **Appliance damage** - Dishwashers, washing machines, and ice makers can fail prematurely
4. **Fixture damage** - Faucets and valves may leak or malfunction

## Solutions for Hard Water

### Water Softeners
The most effective solution is installing a whole-home water softener. These systems use ion exchange to remove calcium and magnesium from your water.

### Water Conditioners
Salt-free water conditioners don't remove minerals but change their structure to prevent scale buildup.

### Regular Maintenance
Schedule annual plumbing inspections to catch hard water damage early. Consider:
- Flushing your water heater annually
- Cleaning aerators and showerheads regularly
- Checking for signs of pipe corrosion

## Need Help?

If you're dealing with hard water problems in your Phoenix home, give us a call. We can assess your situation and recommend the best solution for your needs.
    `,
  },
  "water-heater-maintenance-tips": {
    content: `
Your water heater works hard every day, especially in Arizona where we rely on it year-round. Proper maintenance can extend its life by years and keep your energy bills in check.

## Annual Maintenance Checklist

### 1. Flush the Tank
Sediment buildup is the number one killer of water heaters in Arizona. Our hard water deposits minerals at the bottom of the tank, reducing efficiency and causing damage.

**How to flush your tank:**
1. Turn off the power (gas or electric)
2. Connect a garden hose to the drain valve
3. Run the hose to a safe drainage area
4. Open the drain valve and let water flow until clear
5. Close the valve, remove the hose, and restore power

### 2. Check the Anode Rod
The anode rod is a sacrificial component that attracts corrosive elements, protecting your tank. In Arizona's hard water, these rods wear out faster.

- Check annually (more often in hard water areas)
- Replace if more than 50% corroded
- Consider upgrading to a powered anode rod

### 3. Test the T&P Valve
The temperature and pressure relief valve is a critical safety feature.

- Lift the lever to release some water
- It should flow freely and stop when released
- If it drips or doesn't flow, replace immediately

### 4. Check the Temperature Setting
The Department of Energy recommends 120°F for most households. Higher temperatures:
- Waste energy
- Increase scalding risk
- Accelerate tank corrosion

## Warning Signs Your Water Heater Needs Attention

- **Rusty water** - Could indicate tank corrosion
- **Rumbling noises** - Sediment buildup
- **Lukewarm water** - Failing heating element or thermostat
- **Leaks around the base** - Tank may be failing
- **Age over 10 years** - Consider replacement

## When to Call a Professional

While some maintenance tasks are DIY-friendly, call a professional if you notice:
- Gas odors near your water heater
- Significant leaks
- Error codes on tankless units
- Pilot light issues
- Strange noises that don't resolve after flushing

## Ready for a Water Heater Checkup?

Contact Moran Plumbing for professional water heater maintenance, repair, or replacement. We service all brands and types, including tankless systems.
    `,
  },
  "signs-you-need-slab-leak-repair": {
    content: `
Slab leaks are one of the most serious plumbing problems homeowners face. Because the pipes are buried beneath your home's concrete foundation, these leaks can go undetected for months, causing extensive damage.

## What is a Slab Leak?

A slab leak occurs when the water pipes running beneath your home's concrete foundation develop a leak. This can happen due to:
- **Corrosion** from Arizona's hard water
- **Shifting soil** - common in our desert climate
- **Poor installation** or low-quality materials
- **Abrasion** from pipes rubbing against concrete
- **High water pressure**

## 5 Warning Signs of a Slab Leak

### 1. Unexplained Increase in Water Bills
If your water bill suddenly spikes without a change in usage, you may have a leak. Even a small slab leak can waste thousands of gallons per month.

### 2. Sound of Running Water
Do you hear water running when all fixtures are off? This could indicate water escaping from a pressurized line under your foundation.

### 3. Warm Spots on the Floor
If you notice warm areas on tile or concrete floors, a hot water line may be leaking beneath.

### 4. Cracks in Walls or Flooring
Water from a slab leak erodes the soil beneath your foundation, causing shifts that can crack:
- Drywall
- Tile
- Baseboards
- The foundation itself

### 5. Mold, Mildew, or Musty Odors
Moisture from a slab leak creates ideal conditions for mold growth. You might notice:
- Musty smells in certain rooms
- Visible mold on baseboards or walls
- Increased allergy symptoms

## What to Do If You Suspect a Slab Leak

1. **Check your water meter** - Turn off all water fixtures and watch the meter. If it's still moving, you have a leak.
2. **Document any damage** - Take photos for insurance purposes
3. **Call a professional** - Slab leaks require specialized detection and repair

## How We Detect Slab Leaks

At Moran Plumbing, we use advanced technology to locate slab leaks without unnecessary demolition:
- Electronic leak detection equipment
- Video camera inspection
- Thermal imaging
- Acoustic listening devices

## Repair Options

Depending on the location and severity, repair options include:
- **Spot repair** - Access and fix a single leak point
- **Rerouting** - Bypass the damaged section entirely
- **Epoxy pipe coating** - Line existing pipes from within
- **Complete repiping** - Replace all below-slab plumbing

## Don't Wait

Slab leaks only get worse with time. The longer you wait, the more damage occurs and the more expensive repairs become. If you notice any warning signs, contact us immediately for an inspection.
    `,
  },
  "commercial-plumbing-maintenance-checklist": {
    content: `
For Phoenix businesses, a well-maintained plumbing system is essential for daily operations. Unexpected plumbing problems can disrupt service, damage inventory, and create liability issues.

## Monthly Maintenance Tasks

### Inspect All Fixtures
- Check faucets for drips and leaks
- Test flush valves on toilets and urinals
- Ensure automatic sensors are working properly
- Look for signs of corrosion or wear

### Clean Floor Drains
- Remove debris from drain covers
- Pour water down rarely-used drains to maintain the P-trap seal
- Check for slow drainage indicating potential clogs

### Water Heater Check
- Test the temperature and pressure relief valve
- Check for leaks around fittings
- Monitor water temperature consistency

## Quarterly Maintenance

### Grease Trap Cleaning
Restaurants and food service businesses must maintain grease traps to:
- Prevent drain blockages
- Comply with health codes
- Avoid expensive emergency calls
- Protect the municipal sewer system

### Backflow Testing
Arizona requires annual backflow prevention testing, but quarterly inspections help catch issues early.

### Water Pressure Check
Monitor water pressure throughout your facility. Inconsistent pressure can indicate:
- Pipe corrosion
- Hidden leaks
- Failing pressure regulators

## Annual Professional Service

### Video Pipe Inspection
Have a professional camera inspection of your main sewer line to detect:
- Root intrusion
- Pipe deterioration
- Developing blockages

### Water Heater Flush
Commercial water heaters need annual flushing to remove sediment and maintain efficiency.

### Full System Audit
A comprehensive plumbing audit includes:
- Water usage analysis
- Fixture condition assessment
- Code compliance review
- Efficiency recommendations

## Emergency Preparedness

Every business should have:
- **Main shut-off valve location** posted and accessible
- **Emergency plumber contact** readily available
- **Basic plumbing tools** for minor issues
- **Water damage supplies** (mops, towels, buckets)

## Industry-Specific Considerations

### Restaurants
- Daily grease trap monitoring
- Regular drain cleaning schedule
- Hot water system maintenance
- Ice machine line inspection

### Medical Facilities
- Strict hot water temperature control
- Specialized fixture maintenance
- Cross-connection control
- Sanitary drainage compliance

### Retail
- Restroom fixture reliability
- Break room plumbing
- HVAC drainage systems

## Partner with Moran Plumbing

We offer commercial maintenance contracts tailored to your business needs. Regular maintenance prevents emergencies, extends equipment life, and keeps your business running smoothly.
    `,
  },
  "tankless-vs-tank-water-heaters": {
    content: `
Choosing between a tankless and traditional tank water heater is one of the biggest decisions Phoenix homeowners face. Both have advantages, and the right choice depends on your household's needs.

## Traditional Tank Water Heaters

### How They Work
Tank water heaters store 40-80 gallons of hot water, keeping it heated and ready for use. When you use hot water, cold water enters the bottom of the tank and is heated.

### Advantages
- **Lower upfront cost** - Units typically cost $800-$1,500 installed
- **Simple installation** - Easy to replace existing units
- **Reliable technology** - Well-understood by all plumbers
- **Works during power outages** (gas models)

### Disadvantages
- **Limited hot water supply** - Can run out during heavy use
- **Higher energy costs** - Constantly heating water, even when not in use
- **Shorter lifespan** - 10-15 years average
- **Larger footprint** - Takes up significant space

## Tankless Water Heaters

### How They Work
Tankless (on-demand) water heaters heat water as it flows through the unit, providing hot water only when needed.

### Advantages
- **Endless hot water** - Never runs out
- **Lower energy costs** - Only heats water when needed (20-30% savings)
- **Longer lifespan** - 20+ years with maintenance
- **Space-saving** - Wall-mounted, compact design
- **Cleaner water** - No tank sediment

### Disadvantages
- **Higher upfront cost** - $2,500-$4,500 installed
- **May need gas line upgrade** - Higher BTU requirements
- **Flow rate limitations** - Can struggle with multiple simultaneous uses
- **Electricity required** - Won't work during power outages
- **More complex maintenance**

## Which is Right for Arizona Homes?

### Consider Tankless If:
- You have a larger family with high hot water demand
- You want to reduce monthly energy costs
- You're building new or doing a major remodel
- Space is at a premium
- You plan to stay in your home long-term

### Consider Tank If:
- Budget is your primary concern
- You have low to moderate hot water needs
- You want simple, straightforward maintenance
- You need hot water during power outages
- You're replacing an existing tank system

## Arizona-Specific Considerations

### Hard Water Impact
Arizona's hard water affects both types:
- **Tank heaters** - Sediment buildup reduces efficiency
- **Tankless heaters** - Scale can damage heat exchangers

Regular maintenance and water softeners help both systems last longer.

### Ground Water Temperature
Phoenix's warm ground water (65-75°F) means:
- Less energy needed to heat water
- Tankless units can achieve higher flow rates
- Both systems work efficiently year-round

### Sizing Considerations
In Arizona, we recommend:
- **Tank heaters** - 50-gallon minimum for 2-3 people
- **Tankless heaters** - 8+ GPM for whole-house applications

## Making the Decision

We recommend scheduling a consultation to discuss:
- Your household size and hot water usage
- Current gas line and electrical capacity
- Budget for installation and long-term operation
- Space considerations
- Future plans for your home

Contact Moran Plumbing for a free assessment and quote on water heater installation or replacement.
    `,
  },
  "emergency-plumbing-tips": {
    content: `
Plumbing emergencies rarely happen at convenient times. Knowing what to do before the plumber arrives can minimize damage and reduce repair costs.

## The First Thing to Do: Shut Off the Water

Every household member should know where these shut-off valves are located:

### Main Water Shut-Off
Usually located:
- Near the water meter (front yard or sidewalk)
- Where the main line enters your home
- In the garage (common in Arizona homes)

Turn clockwise to close. This stops all water flow to your home.

### Individual Fixture Shut-Offs
Located under sinks, behind toilets, and near appliances. These let you stop water to one fixture without affecting the whole house.

## Common Emergencies and What to Do

### Burst Pipe
1. Shut off the main water immediately
2. Open faucets to drain remaining water
3. Turn off electricity if water is near electrical outlets
4. Collect water with buckets and towels
5. Call a plumber

### Overflowing Toilet
1. Remove the tank lid
2. Push down the flapper to stop water flow
3. Turn off the supply valve behind the toilet
4. Use a plunger or wait for the water level to drop
5. Don't flush again until the clog is cleared

### Clogged Drain
1. Stop using water in that fixture
2. Try a plunger (use the right type - cup for sinks, flange for toilets)
3. **Don't** use chemical drain cleaners - they can damage pipes
4. If plunging doesn't work, call a professional

### Water Heater Leak
1. Turn off the water supply to the heater
2. Turn off the power (gas valve or breaker)
3. Attach a hose to the drain valve and empty the tank
4. Call for repair or replacement

### Gas Line Leak
1. **Do not** turn on lights or create sparks
2. Evacuate the building immediately
3. Call 911 and your gas company from outside
4. Wait for professionals - do not re-enter

## What NOT to Do During a Plumbing Emergency

- **Don't panic** - Stay calm and think through the steps
- **Don't ignore small leaks** - They only get worse
- **Don't use chemical drain cleaners** - They can cause more problems
- **Don't try to fix gas line issues yourself** - This requires a licensed professional
- **Don't forget to document damage** - Take photos for insurance

## Be Prepared: Your Emergency Kit

Keep these items accessible:
- Flashlight
- Plunger (one for sinks, one for toilets)
- Adjustable wrench
- Bucket and towels
- Plumber's tape
- Your plumber's phone number

## When to Call a Professional

Call immediately for:
- Water flooding your home
- Sewage backup
- No water throughout the house
- Gas odors
- Water heater malfunctions
- Frozen pipes

## Moran Plumbing: 24/7 Emergency Service

Plumbing emergencies don't wait for business hours. Neither do we. Save our number: ${COMPANY.phone}

We're available 24/7, 365 days a year for emergency plumbing service throughout the Phoenix metro area.
    `,
  },
  "new-construction-plumbing-timeline": {
    content: `
Building a new home in Phoenix? Understanding the plumbing timeline helps you plan your project and avoid costly delays.

## Phase 1: Pre-Construction Planning

### Design and Permits
Before any work begins:
- Plumbing plans are drawn based on architectural blueprints
- Fixture locations are determined
- Water heater type and location are specified
- Permits are pulled with the city

### Underground Rough-In
If the home has a slab foundation (common in Arizona):
- Sewer lines are trenched and installed
- Water supply lines are positioned
- Drain locations are set
- Work must pass inspection before concrete is poured

## Phase 2: Rough-In Plumbing

This happens after framing but before drywall.

### What's Installed
- Water supply lines (hot and cold)
- Drain, waste, and vent (DWV) pipes
- Tub and shower drains and valves
- Water heater connections
- Hose bib locations
- Gas lines for appliances

### Inspection Point
The rough-in must pass inspection before walls are closed. Inspectors verify:
- Proper pipe sizing
- Correct venting
- Appropriate materials
- Code compliance

## Phase 3: Finish Plumbing

This is the final phase, after painting and flooring.

### What's Installed
- Toilets
- Faucets and sinks
- Garbage disposals
- Dishwasher connections
- Water heater
- Shower heads and fixtures
- Ice maker lines
- Outdoor fixtures

### Final Inspection
The completed system is tested and inspected for:
- Proper water pressure
- No leaks
- Correct hot water temperature
- Functional fixtures
- Code compliance

## Timeline Overview

| Phase | When | Duration |
|-------|------|----------|
| Underground | Before foundation | 1-2 days |
| Rough-In | During framing | 3-5 days |
| Finish | After paint/flooring | 2-3 days |

*Actual timeline varies based on home size and complexity.*

## Choosing a New Construction Plumber

Look for:
- **Experience** with new construction (not just repairs)
- **Proper licensing** (Arizona ROC)
- **Good communication** with your builder
- **Warranty** on workmanship
- **References** from recent projects

### Questions to Ask
1. How many new construction projects have you completed?
2. Do you work directly with inspectors?
3. What brands do you recommend for fixtures?
4. How do you handle change orders?
5. What's included in your warranty?

## Arizona-Specific Considerations

### Hard Water Planning
Consider installing:
- Water softener loop
- Pre-plumbing for whole-house filtration
- Quality fixtures rated for hard water

### Hot Weather Considerations
- Insulate exposed pipes
- Install freeze protection on outdoor lines (yes, Arizona can freeze!)
- Consider tankless water heaters for efficiency

### Outdoor Living
Arizona homes often feature:
- Pool plumbing
- Outdoor kitchens
- Multiple hose bibs
- Fire feature gas lines

Plan these during the rough-in phase for easiest installation.

## Partner with Moran Plumbing

We specialize in new construction plumbing for custom homes, apartments, and commercial buildings throughout Phoenix. Our team works seamlessly with builders to keep your project on schedule.

Contact us for a consultation on your next project.
    `,
  },
  "seasonal-plumbing-tips-arizona": {
    content: `
Arizona's extreme climate creates unique challenges for your plumbing system. From scorching summers to surprisingly cold winters, here's how to protect your plumbing year-round.

## Summer (June - August)

Arizona summers are brutal, with temperatures regularly exceeding 110°F.

### Water Heater Stress
Your water heater works harder in summer because:
- Inlet water is warmer (less heating needed)
- But demand increases (more showers, laundry)

**Tip:** Lower your water heater temperature to 120°F to reduce wear.

### Monsoon Season
Arizona's monsoon brings heavy rains that can:
- Flood yards and affect outdoor plumbing
- Overwhelm drains with debris
- Create mud that clogs outdoor pipes

**Tip:** Clear debris from outdoor drains before storms hit.

### Increased Water Use
Summer means higher water bills. Watch for:
- Running toilets (waste up to 200 gallons/day)
- Dripping faucets
- Irrigation leaks

**Tip:** Check your water meter at night when no water is being used. If it moves, you have a leak.

## Fall (September - November)

The perfect time for maintenance before winter.

### Water Heater Maintenance
- Flush the tank to remove sediment
- Check the anode rod
- Test the T&P valve
- Inspect for any leaks

### Irrigation System
- Adjust sprinkler timers as temperatures drop
- Check for damage from summer heat
- Repair any leaks before winter

### Outdoor Faucets
- Inspect hose bibs for leaks
- Disconnect garden hoses
- Install insulated covers before first freeze

## Winter (December - February)

Yes, Arizona can freeze. Phoenix sees several freeze warnings each winter, and northern Arizona (Flagstaff) experiences significant cold.

### Freeze Prevention
Pipes most at risk:
- Outdoor hose bibs
- Pipes in uninsulated areas (garages, attics)
- Pool equipment
- Irrigation systems

**Prevention Tips:**
1. Cover outdoor faucets with insulated covers
2. Let faucets drip during freeze warnings
3. Open cabinet doors under sinks on exterior walls
4. Know where your main shut-off is located

### If Pipes Freeze
1. **Do not** use open flames to thaw pipes
2. Turn off water at the main shut-off
3. Use a hair dryer or space heater to warm pipes gradually
4. Check for cracks before turning water back on
5. Call a professional if you're unsure

### Snowbird Preparation
If leaving for extended periods:
- Don't turn off heat completely (keep at 55°F minimum)
- Shut off main water and drain pipes
- Have someone check the house weekly

## Spring (March - May)

Time to assess any winter damage and prepare for summer.

### System Check
- Inspect all visible pipes for damage
- Check outdoor faucets and irrigation
- Look for slow drains or unusual odors
- Test water pressure

### Air Conditioning Prep
Your AC condensate drain can clog with:
- Dust and debris
- Algae growth
- Sediment

**Tip:** Pour a cup of vinegar down the condensate drain monthly to prevent clogs.

### Irrigation Startup
- Check all lines for winter damage
- Clean and test sprinkler heads
- Adjust timers for spring watering needs

## Year-Round Tips

### Water Softener Maintenance
Arizona's hard water requires:
- Regular salt refills
- Annual system cleaning
- Periodic regeneration checks

### Know Your Shut-Offs
Every family member should know:
- Main water shut-off location
- Individual fixture shut-offs
- Water heater shut-off

### Schedule Annual Inspections
Professional plumbers can catch issues before they become emergencies:
- Hidden leaks
- Pipe corrosion
- Water heater problems
- Drain buildup

Contact Moran Plumbing for seasonal maintenance and year-round service throughout Phoenix.
    `,
  },
  "how-to-choose-plumber-phoenix": {
    content: `
Finding a trustworthy plumber in Phoenix can be challenging. With so many options, how do you know who to call? Here's what to look for—and what to avoid.

## Verify Licensing and Insurance

### Arizona Contractor License
All plumbers in Arizona must be licensed through the Registrar of Contractors (ROC).

**How to verify:**
1. Ask for their ROC number
2. Visit azroc.gov
3. Search by license number or company name
4. Check for complaints or disciplinary actions

### Insurance Requirements
A licensed plumber should carry:
- General liability insurance
- Workers' compensation (if they have employees)

**Why it matters:** Without proper insurance, you could be liable for injuries or damage that occur on your property.

## Check Reviews and Reputation

### Where to Look
- Google Business Profile
- Yelp
- Better Business Bureau
- Nextdoor
- Facebook

### What to Look For
- Overall rating (aim for 4.5+ stars)
- Number of reviews (more is better)
- Recent reviews (within the last 6 months)
- Detailed responses to negative reviews
- Consistency across platforms

### Red Flags
- No online presence
- Only perfect reviews (may be fake)
- Repeated complaints about the same issues
- No response to negative reviews

## Get Multiple Quotes

For non-emergency work, get 2-3 quotes.

### What a Good Quote Includes
- Detailed scope of work
- Materials to be used
- Timeline for completion
- Total cost breakdown
- Warranty information
- Payment terms

### Red Flags
- Quotes over the phone without seeing the problem
- Vague or verbal-only estimates
- High-pressure sales tactics
- Asking for full payment upfront
- Significantly lower prices than competitors (may cut corners)

## Ask the Right Questions

### About Their Experience
- How long have you been in business?
- Do you specialize in this type of work?
- Have you done similar jobs recently?

### About the Job
- What's causing the problem?
- What are my repair options?
- How long will this take?
- Is there anything I should do to prepare?

### About the Cost
- Is this a flat rate or hourly charge?
- What happens if you find additional problems?
- Are there any potential additional costs?
- What forms of payment do you accept?

### About Warranty
- What warranty do you offer on labor?
- What about warranty on parts?
- What's the process if something goes wrong?

## Emergency Plumber Considerations

In an emergency, you may not have time for extensive research. To prepare:

1. **Find a plumber before you need one** - Research and save contacts
2. **Ask about emergency rates** - Nights and weekends often cost more
3. **Confirm availability** - Not all plumbers offer 24/7 service
4. **Know your shut-offs** - Minimize damage while waiting

## Warning Signs of a Bad Plumber

- Shows up without identification or branded vehicle
- Doesn't pull permits when required
- Uses high-pressure sales tactics
- Can't provide references
- Demands large deposits or cash only
- Makes you feel rushed or uncomfortable
- Can't explain what they're doing

## Why Choose Moran Plumbing

We understand that choosing a plumber is about trust. Here's what we offer:

- **Licensed** - Arizona ROC #361367
- **Insured** - Fully covered for your protection
- **Reviewed** - 5.0 stars on Google
- **Available** - 24/7 emergency service
- **Honest** - Upfront pricing, no surprises
- **Family-owned** - We treat your home like our own

Call ${COMPANY.phone} for service you can trust.
    `,
  },
  "drain-cleaning-diy-vs-professional": {
    content: `
A clogged drain is one of the most common plumbing problems homeowners face. But when can you fix it yourself, and when should you call a professional?

## When DIY Drain Cleaning Works

### Simple Clogs
You can likely handle:
- Slow bathroom sink drains (usually hair)
- Kitchen sink clogs near the drain opening
- Shower drains with visible hair buildup
- Toilet clogs that respond to a plunger

### DIY Methods That Work

**1. The Plunger**
The most effective DIY tool. Tips for success:
- Use the right type (cup for sinks, flange for toilets)
- Cover the overflow hole with a wet rag
- Create a seal and plunge vigorously
- Run water to confirm the clog is cleared

**2. Manual Removal**
For hair clogs near the drain opening:
- Remove the drain cover
- Use needle-nose pliers or a drain snake
- Pull out the clog manually
- Clean the stopper mechanism

**3. Baking Soda and Vinegar**
A gentle option for minor slow drains:
- Pour 1/2 cup baking soda down the drain
- Follow with 1/2 cup white vinegar
- Cover and wait 15-30 minutes
- Flush with boiling water

**4. Drain Snake (Hand Auger)**
For clogs deeper in the drain:
- Insert the snake into the drain
- Turn the handle to navigate bends
- When you hit resistance, rotate to break up the clog
- Pull out debris and flush with water

### What NOT to Do

**Chemical Drain Cleaners**
We strongly advise against chemical drain cleaners:
- They damage pipes over time
- They're harmful to the environment
- They often don't work on serious clogs
- They can cause chemical burns
- They make professional service more difficult

## When to Call a Professional

### Signs You Need Professional Help

**1. Multiple Slow Drains**
If several drains are slow simultaneously, you likely have a main line issue that requires professional equipment.

**2. Recurring Clogs**
Clogs that keep coming back indicate a deeper problem like:
- Root intrusion
- Pipe damage
- Buildup in the main line

**3. Complete Blockage**
No water draining at all usually means a serious clog that needs professional clearing.

**4. Sewage Smell**
Odors coming from drains can indicate:
- Dry P-traps
- Venting issues
- Sewer line problems

**5. Gurgling Sounds**
Strange noises when water drains suggest venting problems or partial blockages.

**6. Water Backup**
Water coming up in other fixtures when you flush or run water needs immediate professional attention.

### What Professionals Can Do

**Video Camera Inspection**
We can see exactly what's causing the problem without guessing. This reveals:
- Root intrusion
- Pipe damage
- Location of blockages
- Condition of your pipes

**Hydro Jetting**
High-pressure water cleaning that:
- Removes years of buildup
- Clears roots and debris
- Cleans the entire pipe diameter
- Prevents future clogs

**Professional Snaking**
Commercial-grade equipment that:
- Reaches deeper than consumer tools
- Has more power to break up tough clogs
- Can navigate complex pipe layouts

## Cost Comparison

| Method | Cost | Effectiveness |
|--------|------|---------------|
| Plunger | $10-20 | Good for simple clogs |
| Hand snake | $20-50 | Good for minor clogs |
| Chemical cleaners | $10-30 | Often ineffective, damages pipes |
| Professional snaking | $100-300 | Very effective |
| Hydro jetting | $300-600 | Best for serious buildup |
| Camera inspection | $100-400 | Diagnostic, prevents repeat visits |

## Prevention Is Key

**Kitchen Sinks**
- Never pour grease down the drain
- Use a strainer to catch food particles
- Run cold water when using the disposal
- Clean the disposal monthly with ice and salt

**Bathroom Sinks & Showers**
- Install hair catchers
- Clean stoppers monthly
- Avoid letting soap buildup accumulate

**Toilets**
- Only flush toilet paper and waste
- No wipes (even "flushable" ones)
- No feminine products
- No cotton swabs or dental floss

## Call Moran Plumbing

When DIY methods aren't working, call the professionals. We have the tools and expertise to clear any clog and identify underlying problems before they get worse.
    `,
  },
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const content = BLOG_CONTENT[slug]?.content || "";
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="bg-charcoal-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
            <Link href="/blog" className="hover:text-gold transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gold">{post.category}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <span>{post.date}</span>
            <span>&#8226;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-charcoal py-12 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-gold max-w-none">
            <div
              className="text-zinc-300 leading-relaxed space-y-4"
              style={{ whiteSpace: 'pre-line' }}
            >
              {content.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={i} className="text-xl font-bold text-gold mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
                  return (
                    <ul key={i} className="list-disc list-inside space-y-1 text-zinc-300">
                      {paragraph.split('\n').map((item, j) => (
                        <li key={j}>{item.replace(/^[-\d.]\s*/, '')}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={i} className="font-bold text-white">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                return <p key={i}>{paragraph}</p>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal-dark py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-black mb-2">Need Plumbing Help?</h2>
            <p className="text-black/80 mb-4">
              Contact Moran Plumbing for professional service in Phoenix.
            </p>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-block bg-black text-white font-bold px-6 py-3 rounded hover:bg-zinc-800 transition-colors"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-charcoal py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            More <span className="text-gold">Articles</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-charcoal-light p-6 rounded-lg border border-zinc-800 hover:border-gold transition-colors"
              >
                <span className="text-gold text-xs">{p.category}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
