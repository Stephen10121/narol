<script lang="ts">
    import { Button } from "@/components/ui/button";
    import { Mail, Phone } from "@lucide/svelte"; 
</script>

<div class="min-h-screen bg-white">
    <header class="bg-white border-b sticky top-0 left-0 z-50">
        <div class="w-full px-6 md:px-12 lg:px-20 py-5">
            <div class="flex items-center w-full justify-between">
                <h2 class="text-xl font-bold text-gray-900">
                    NAROL Heating & Cooling
                </h2>
                <nav class="hidden md:flex items-center gap-8 text-sm">
                    <a href="#services" class="text-gray-600 hover:text-gray-900">Services</a>
                    <a href="#about" class="text-gray-600 hover:text-gray-900">About Us</a>
                    <a href="#contact" class="text-gray-600 hover:text-gray-900">Contact</a>
                </nav>
            </div>
        </div>
    </header>

    <section class="grid md:grid-cols-2 min-h-[600px]">
        <div class="bg-blue-50/30 flex items-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
            <div class="max-w-xl">
                <p class="text-sm uppercase tracking-wider text-gray-600 mb-4">
                    Quality HVAC Services
                </p>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                    Professional Heating & Cooling Solutions
                </h1>
                <Button 
                    size="lg" 
                    class="rounded-full px-8 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                    Contact
                </Button>
            </div>
        </div>

        <div class="relative min-h-[400px] md:min-h-[600px] max-h-screen overflow-hidden isolate">
            <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251108_161629%20%281%29-0DrQaYkZIh8MyRO1ONoLa2IMdCFlGA.jpg"
                alt="HVAC Installation"
                class="object-cover"
            />
        </div>
    </section>

    <section class="py-20 px-6 bg-white">
    <div class="container mx-auto max-w-7xl">
        <div class="grid md:grid-cols-2 gap-16 mb-16">
        <div>
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900">
            Our Specializations
            </h2>
        </div>
        <div class="flex flex-col justify-center">
            <p class="text-sm uppercase tracking-wider text-gray-600 mb-2">
            Where We Excel
            </p>
            <p class="text-lg text-gray-700">
            Expert HVAC Services for Washington
            </p>
        </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-gray-200 p-8 rounded-sm min-h-[200px] flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
            New HVAC Systems
            </h3>
            <p class="text-gray-700">
            Complete System Installations
            </p>
        </div>

        <div class="bg-gray-200 p-8 rounded-sm min-h-[200px] flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
            Mini Split Systems
            </h3>
            <p class="text-gray-700">
            Ductless HVAC Solutions
            </p>
        </div>

        <div class="bg-gray-200 p-8 rounded-sm min-h-[200px] flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
            System Repairs
            </h3>
            <p class="text-gray-700">
            Expert HVAC Repairs
            </p>
        </div>
        </div>
    </div>
    </section>

    <section class="py-20 px-6 bg-gray-50">
    <div class="container mx-auto max-w-7xl">
        <div class="flex items-center justify-between mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Us?
        </h2>
        <p class="text-sm uppercase tracking-wider text-gray-600 hidden md:block">
            Quality & Experience
        </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-6">
        <div class="md:col-span-2 relative h-[400px] rounded-sm overflow-hidden group">
            <div class="w-full h-full overflow-hidden">
                <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251108_161629%20%282%29-c342PFgkKK1tU9H89WyVfOCjuKwFQ1.jpg"
                    alt="Professional Installation"
                    class="object-cover brightness-90 min-h-full"
                />
            </div>
            <div class="absolute top-8 left-8 bg-blue-100/95 p-6 max-w-sm">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
                Quality Based on Experience
            </h3>
            <p class="text-sm text-gray-700">
                Expert knowledge and attention to detail
            </p>
            </div>
        </div>

        <div class="relative h-[400px] rounded-sm overflow-hidden">
            <div class="w-full h-full overflow-hidden">
                <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251108_161629%20%289%29-b9DtHbdBC00Wl7g7o7NboksMjXZfRp.jpg"
                    alt="Mini Split Installation"
                    class="object-cover brightness-90 min-h-full"
                />
            </div>
            <div class="absolute top-8 left-8 bg-blue-100/95 p-6 max-w-xs">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
                Licensed & Bonded
            </h3>
            <p class="text-sm text-gray-700">
                Fully insured professionals
            </p>
            </div>
        </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
        <div class="relative h-[300px] rounded-sm overflow-hidden">
            <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251108_161629%20%284%29-jeclAf8dBgcdTNVRXnUWsSENc0p6wF.jpg"
            alt="Furnace Installation"
            class="object-cover brightness-90"
            />
            <div class="absolute bottom-8 left-8 bg-blue-100/95 p-6 max-w-xs">
            <h3 class="text-xl font-bold text-gray-900 mb-2">
                Customer-Focused Service
            </h3>
            <p class="text-sm text-gray-700">
                Clear communication & fair pricing
            </p>
            </div>
        </div>

        <div class="relative h-[300px] rounded-sm overflow-hidden">
            <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251108_161628%20%282%29-SP9nnYX0kgPiKJMLXLWJYAoYGXKZPi.jpg"
            alt="HVAC Unit"
            class="object-cover brightness-90"
            />
            <div class="absolute bottom-8 left-8 bg-blue-100/95 p-6 max-w-xs">
            <h3 class="text-xl font-bold text-gray-900 mb-2">
                Reliable Solutions
            </h3>
            <p class="text-sm text-gray-700">
                Long-lasting installations
            </p>
            </div>
        </div>

        <div class="relative h-[300px] rounded-sm overflow-hidden">
            <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251108_161629%20%286%29-15jmJ85HKda8ryNK3O83tg4vrAdWdL.jpg"
            alt="Complete System"
            class="object-cover brightness-90"
            />
            <div class="absolute bottom-8 left-8 bg-blue-100/95 p-6 max-w-xs">
            <h3 class="text-xl font-bold text-gray-900 mb-2">
                Peace of Mind
            </h3>
            <p class="text-sm text-gray-700">
                Trusted by the community
            </p>
            </div>
        </div>
        </div>
    </div>
    </section>

    <section id="services" class="py-20 px-6 bg-white">
    <div class="container mx-auto max-w-7xl">
        <div class="mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Expertise
        </h2>
        <p class="text-sm uppercase tracking-wider text-gray-600">
            Comprehensive HVAC Solutions
        </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-6">
        <div class="bg-gray-200 p-10 rounded-sm min-h-[220px] flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
            New HVAC Systems Install
            </h3>
            <p class="text-gray-700">
            Complete System Installations
            </p>
        </div>

        <div class="bg-gray-200 p-10 rounded-sm min-h-[220px] flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
            Mini Splits Install
            </h3>
            <p class="text-gray-700">
            Ductless HVAC Systems
            </p>
        </div>

        <div class="bg-gray-200 p-10 rounded-sm min-h-[220px] flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
            Repairs on Existing Systems
            </h3>
            <p class="text-gray-700">
            Expert Repair Services
            </p>
        </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-200 p-10 rounded-sm min-h-[220px] flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
            Duct Work
            </h3>
            <p class="text-gray-700">
            Professional Ductwork Installation & Repair
            </p>
        </div>

        <div class="bg-gray-200 p-10 rounded-sm min-h-[220px] flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
            Maintenance
            </h3>
            <p class="text-gray-700">
            Regular System Maintenance Services
            </p>
        </div>
        </div>
    </div>
    </section>

    <section id="about" class="grid md:grid-cols-2 min-h-[600px]">
    <div class="relative min-h-[400px] md:min-h-[600px] order-2 md:order-1">
        <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20251108_161629-dAYZoQjU4KqQe7TOTiAKYyNFYLRSug.jpg"
            alt="Professional HVAC Work"
            class="object-cover"
        />
    </div>

    <div class="bg-blue-50/30 flex items-center px-6 md:px-12 lg:px-16 py-16 md:py-0 order-1 md:order-2">
        <div class="max-w-xl">
        <p class="text-sm uppercase tracking-wider text-gray-600 mb-4">
            Our Commitment
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Company You Can Trust
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-8">
            NAROL Heating & Cooling LLC is built on focused, hands-on experience in the HVAC industry. 
            Our mission is simple: to provide our community with the highest quality workmanship and 
            truly quality service.
        </p>
        <p class="text-base text-gray-600 leading-relaxed">
            We understand that your comfort system is vital to your home or business, so we strive 
            to be a company you can trust. With clear communication, honest estimates, fair pricing, 
            and timely service, we provide your peace of mind.
        </p>
        </div>
    </div>
    </section>

    <section id="contact" class="py-20 px-6 bg-gray-900 text-white">
    <div class="container mx-auto max-w-7xl">
        <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
            </h2>
            <p class="text-lg text-gray-300 mb-8">
            Contact us today for professional HVAC services
            </p>
        </div>

        <div class="space-y-6">
            <div class="flex items-center gap-4">
            <Phone class="w-6 h-6" />
            <div>
                <p class="text-sm text-gray-400 mb-1">Phone</p>
                <a href="tel:3607210802" class="text-2xl font-bold hover:text-blue-400">
                360-721-0802
                </a>
            </div>
            </div>

            <div class="flex items-center gap-4">
            <Mail class="w-6 h-6" />
            <div>
                <p class="text-sm text-gray-400 mb-1">Email</p>
                <a href="mailto:narolhvac99@gmail.com" class="text-xl font-semibold hover:text-blue-400 break-all">
                narolhvac99@gmail.com
                </a>
            </div>
            </div>

            <div class="pt-6 border-t border-gray-700">
            <p class="text-sm text-gray-400">
                WA License: CC NAROLHC750O3
            </p>
            <p class="text-sm text-gray-400">
                Bonded & Insured
            </p>
            </div>
        </div>
        </div>
    </div>
    </section>

    <footer class="bg-gray-950 text-gray-400 py-8 px-6">
    <div class="container mx-auto max-w-7xl">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© 2025 by NAROL Heating & Cooling LLC</p>
        <div class="flex gap-8">
            <a href="/" class="hover:text-white">Accessibility Statement</a>
            <a href="/" class="hover:text-white">Privacy Policy</a>
        </div>
        </div>
        <div class="mt-6 text-center md:text-left">
        <p class="text-xs">123-456-7890</p>
        <p class="text-xs">info@mysite.com</p>
        <p class="text-xs">500 Terry Francine Street, San Francisco, CA 94158</p>
        </div>
    </div>
    </footer>
</div>