import { NextRequest, NextResponse } from 'next/server';
import { mockStations, filterStations, CITY_CONFIGS } from '@/data/stations';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city') || 'All';
    const query = searchParams.get('q') || '';
    const filter = searchParams.get('filter') || 'All';

    const filtered = filterStations(mockStations, {
      city,
      query,
      filter,
    });

    const activeCount = filtered.filter(
      (s) => s.status === 'Available' || s.availability === 'Available'
    ).length;

    return NextResponse.json({
      success: true,
      data: filtered,
      total: filtered.length,
      activeCount,
      cities: Object.keys(CITY_CONFIGS),
      verified: true,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Failed to retrieve charging stations:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to retrieve station telemetry',
        data: [],
      },
      { status: 500 }
    );
  }
}
